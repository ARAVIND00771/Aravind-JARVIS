import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Message } from '../../types';
import { cn } from '../../lib/utils';
import { Bot, User } from 'lucide-react';

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        "flex w-full gap-4 max-w-5xl mx-auto p-4 rounded-2xl",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className={cn(
        "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border shadow-lg backdrop-blur-sm",
        isUser 
          ? "bg-white/10 border-white/20 text-white" 
          : "bg-sky-500/20 border-sky-500/50 text-sky-400 box-glow"
      )}>
        {isUser ? <User size={24} /> : <Bot size={24} />}
      </div>
      
      <div className={cn(
        "flex-1 space-y-2 overflow-hidden",
        isUser ? "text-right" : "text-left"
      )}>
        <div className="text-xs font-semibold text-sky-200/40 uppercase tracking-widest">
          {isUser ? 'Authorized Operator' : 'J.A.R.V.I.S Core System'}
        </div>
        <div className={cn(
          "inline-block rounded-2xl p-5 max-w-[85%] backdrop-blur-xl border shadow-2xl transition-all duration-300",
          isUser 
            ? "bg-white/5 border-white/10 text-white hover:bg-white/10" 
            : "bg-sky-950/30 border-sky-500/30 text-sky-50 hover:border-sky-400/50 hover:bg-sky-900/40 box-glow"
        )}>
          <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/80 prose-pre:border prose-pre:border-sky-500/30 prose-pre:shadow-[0_0_15px_rgba(14,165,233,0.1)] prose-a:text-sky-400 hover:prose-a:text-sky-300 max-w-none text-sm md:text-[15px]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
