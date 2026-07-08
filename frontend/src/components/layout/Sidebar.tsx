import { motion } from 'framer-motion';
import { Plus, MessageSquare, Settings, Trash2, ChevronLeft, ChevronRight, Mic } from 'lucide-react';
import { useChatStore } from '../../store/chatStore';
import { cn } from '../../lib/utils';

export default function Sidebar() {
  const { sessions, activeSessionId, isSidebarOpen, toggleSidebar, createSession, setActiveSession, deleteSession } = useChatStore();

  return (
    <div
      className={cn(
        "h-full flex-shrink-0 glass-panel border-r border-white/10 flex flex-col relative z-20",
        !isSidebarOpen && "overflow-hidden border-none"
      )}
      style={{ width: isSidebarOpen ? 320 : 0, opacity: isSidebarOpen ? 1 : 0 }}
    >
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3 text-sky-400">
          <div className="w-10 h-10 rounded-full border border-sky-400/50 flex items-center justify-center box-glow">
            <Mic size={20} />
          </div>
          <span className="font-bold text-lg tracking-widest text-glow uppercase">J.A.R.V.I.S</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="p-4"
      >
        <button
          onClick={createSession}
          className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 hover:border-sky-500/40 transition-all text-sm font-medium text-sky-100 shadow-[0_0_15px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
        >
          <Plus size={18} />
          Initialize New Protocol
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="flex-1 overflow-y-auto px-4 py-2 space-y-2"
      >
        <div className="text-xs font-semibold text-sky-200/40 tracking-wider mb-4 uppercase">Neural Memory Logs</div>
        {sessions.map((session) => (
          <div
            key={session.id}
            onClick={() => setActiveSession(session.id)}
            className={cn(
              "group flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all duration-300",
              activeSessionId === session.id 
                ? "bg-sky-500/20 border border-sky-500/30 text-sky-300 box-glow" 
                : "hover:bg-white/5 text-white/70"
            )}
          >
            <MessageSquare size={16} className={activeSessionId === session.id ? "text-sky-400" : "text-white/40"} />
            <span className="flex-1 truncate text-sm">{session.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteSession(session.id);
              }}
              className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="p-4 border-t border-white/10 bg-black/20"
      >
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-white/5 transition-colors text-sm font-medium text-white/70 hover:text-sky-300">
          <Settings size={18} />
          Core Preferences
        </button>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-white/10 backdrop-blur-md rounded-r-xl border-y border-r border-white/10 flex items-center justify-center text-white/50 hover:text-sky-400 transition-colors"
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
}
