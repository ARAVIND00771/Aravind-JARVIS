import { create } from 'zustand';
import type { ChatSession, Message } from '../types';

interface ChatState {
  sessions: ChatSession[];
  activeSessionId: string | null;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  createSession: () => void;
  setActiveSession: (id: string) => void;
  addMessage: (content: string, role: Message['role']) => void;
  deleteSession: (id: string) => void;
}

const generateId = () => crypto.randomUUID();

export const useChatStore = create<ChatState>((set) => ({
  sessions: [],
  activeSessionId: null,
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  createSession: () => {
    const newSession: ChatSession = {
      id: generateId(),
      title: 'New Directive',
      messages: [],
      updatedAt: Date.now(),
    };
    set((state) => ({
      sessions: [newSession, ...state.sessions],
      activeSessionId: newSession.id,
    }));
  },
  setActiveSession: (id) => set({ activeSessionId: id }),
  addMessage: (content, role) => {
    set((state) => {
      const { activeSessionId, sessions } = state;
      let sessionId = activeSessionId;
      let newSessions = [...sessions];
      
      if (!sessionId) {
        sessionId = generateId();
        newSessions = [{
          id: sessionId,
          title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
          messages: [],
          updatedAt: Date.now()
        }, ...newSessions];
      }

      newSessions = newSessions.map(session => {
        if (session.id === sessionId) {
          return {
            ...session,
            updatedAt: Date.now(),
            messages: [...session.messages, {
              id: generateId(),
              role,
              content,
              timestamp: Date.now()
            }]
          };
        }
        return session;
      });

      return {
        sessions: newSessions,
        activeSessionId: sessionId
      };
    });
  },
  deleteSession: (id) => set((state) => ({
    sessions: state.sessions.filter(s => s.id !== id),
    activeSessionId: state.activeSessionId === id ? null : state.activeSessionId
  }))
}));
