import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useChatStore } from '../../store/chatStore';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import { Activity, ShieldCheck } from 'lucide-react';

export default function ChatArea() {
  const { sessions, activeSessionId } = useChatStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const activeSession = sessions.find(s => s.id === activeSessionId);
  const messages = activeSession?.messages || [];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* Top Header */}
      <header className="h-16 flex-shrink-0 flex items-center justify-between px-8 glass-panel border-b border-white/5 bg-slate-950/80 backdrop-blur-md z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sky-400/80">
          <div className="flex items-center gap-3">
            <Activity size={18} className="animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-glow">System Online</span>
          </div>
          <span className="text-[11px] uppercase text-slate-300/70 tracking-[0.3em]">Core AI Assistant</span>
        </div>
        <div className="flex items-center gap-3 text-white/40 text-xs font-mono">
          <ShieldCheck size={14} className="text-emerald-400/70" />
          Secure Local Sandbox
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.2em] text-sky-100">llama3.1:8b</span>
        </div>
      </header>

      {/* Messages Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth z-10"
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Session</p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{activeSession?.title ?? 'New Protocol'}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Messages {messages.length}</span>
            <span className="rounded-full border border-white/10 bg-sky-500/10 px-3 py-1 text-sky-200">Interactive</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {messages.length === 0 ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-full flex flex-col items-center justify-center text-white/30 space-y-8"
            >
              <div className="w-32 h-32 rounded-full border border-sky-500/20 flex items-center justify-center box-glow relative">
                <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-sky-400/80 animate-[spin_4s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border-b-2 border-r-2 border-sky-300/50 animate-[spin_3s_linear_infinite_reverse]" />
                <Activity size={48} className="text-sky-400/80 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              </div>
              <div className="text-center space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.18em] text-white/95 text-glow">Ask J.A.R.V.I.S anything.</h2>
                <p className="text-sm sm:text-base font-mono text-slate-300/80">Type a task, request a summary, or ask J.A.R.V.I.S to control your desktop applications.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 w-full max-w-3xl text-left">
                {[
                  'Open Brave or system apps',
                  'Search local files and documents',
                  'Run terminal commands securely',
                  'Summarize code and docs instantly',
                ].map((hint) => (
                  <div key={hint} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_60px_-30px_rgba(14,165,233,0.4)] transition hover:border-sky-400/30 hover:bg-slate-900/90">
                    <p className="text-sm text-slate-200">{hint}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 pb-4"
            >
              {messages.map(msg => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
             <div className="w-32 h-32 rounded-full border border-sky-500/20 flex items-center justify-center box-glow relative">
                <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-sky-400/80 animate-[spin_4s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border-b-2 border-r-2 border-sky-300/50 animate-[spin_3s_linear_infinite_reverse]" />
                <Activity size={48} className="text-sky-400/80 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
             </div>
             <div className="text-center space-y-4 max-w-2xl">
               <h2 className="text-3xl sm:text-4xl font-semibold tracking-[0.18em] text-white/95 text-glow">Ask J.A.R.V.I.S anything.</h2>
               <p className="text-sm sm:text-base font-mono text-slate-300/80">Type a task, request a summary, or ask J.A.R.V.I.S to control your desktop applications.</p>
             </div>
             <div className="grid gap-3 sm:grid-cols-2 w-full max-w-3xl text-left">
               {[
                 'Open Brave or system apps',
                 'Search local files and documents',
                 'Run terminal commands securely',
                 'Summarize code and docs instantly',
               ].map((hint) => (
                 <div key={hint} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_60px_-30px_rgba(14,165,233,0.4)] transition hover:border-sky-400/30 hover:bg-slate-900/90">
                   <p className="text-sm text-slate-200">{hint}</p>
                 </div>
               ))}
             </div>
          </div>
        ) : (
          <div className="space-y-8 pb-4">
            {messages.map(msg => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 p-4 pb-6 pt-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
        <ChatInput />
      </div>
    </div>
  );
}
