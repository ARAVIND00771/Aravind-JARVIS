import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, Paperclip, Mic, StopCircle, Globe, Terminal, Folder } from 'lucide-react';
import { useChatStore } from '../../store/chatStore';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { addMessage } = useChatStore();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    addMessage(input.trim(), 'user');
    setInput('');
    setIsSending(true);

    try {
      const response = await axios.post('/api/chat', {
        message: input.trim(),
      });

      addMessage(response.data.reply || 'No reply received from the backend.', 'assistant');
    } catch (error) {
      console.error('Chat request failed:', error);
      addMessage('Unable to reach the backend. Please make sure the server is running.', 'assistant');
    } finally {
      setIsSending(false);
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Tool Indicators */}
      <div className="flex flex-wrap items-center gap-2 mb-3 ml-4">
        {[Globe, Terminal, Folder].map((Icon, i) => (
          <div key={i} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all cursor-pointer box-glow">
            <Icon size={15} />
          </div>
        ))}
        <div className="ml-auto text-xs text-slate-400 font-mono uppercase tracking-[0.3em] hidden sm:inline-flex">Type command and press enter</div>
      </div>

      <div className="relative flex items-end gap-2 p-2 rounded-[2rem] glass-panel bg-black/60 border-white/10 focus-within:border-sky-500/50 focus-within:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300">
        <button className="p-4 text-white/50 hover:text-sky-400 transition-colors rounded-full hover:bg-white/10">
          <Paperclip size={22} />
        </button>

        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Issue command to J.A.R.V.I.S..."
          className="flex-1 max-h-48 min-h-[52px] py-4 bg-transparent border-none outline-none resize-none text-white placeholder-white/30 text-[15px] leading-relaxed font-mono"
          rows={1}
        />

          {input.trim() ? (
            <button
              onClick={handleSubmit}
              disabled={isSending}
              className="p-4 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors shadow-[0_0_20px_rgba(14,165,233,0.5)] mb-1 mr-1 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? 'Sending...' : <Send size={22} className="ml-1" />}
            </button>
          ) : (
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`p-4 rounded-full transition-all mb-1 mr-1 ${
                isRecording 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse' 
                  : 'text-white/50 hover:text-sky-400 hover:bg-white/10'
              }`}
            >
              {isRecording ? <StopCircle size={22} /> : <Mic size={22} />}
            </button>
          )}
      </div>
      <div className="flex justify-between items-center mt-3 px-4">
        <div className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse box-glow" />
          J.A.R.V.I.S Neural Net
        </div>
        <div className="text-[10px] tracking-[0.2em] text-sky-400/50 uppercase font-mono">
          [ V1.0.0 CORE ACTIVE ]
        </div>
      </div>
    </div>
  );
}
