import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { answerAbdullah } from "@/lib/abdullah-ai";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "What technologies do you know?",
  "Tell me about your Oracle APEX experience.",
  "Show your skills.",
  "What projects have you built?",
  "Are you available for work?",
  "How can I contact you?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi, I'm Abdullah AI — ask me anything about Abdullah's skills, projects, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = answerAbdullah(trimmed);
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 600 + Math.random() * 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full btn-aurora shadow-[0_20px_60px_-10px_oklch(0.72_0.19_295_/_0.7)]"
        aria-label="Open Abdullah AI"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
              <MessageCircle className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-24 right-6 z-50 flex h-[560px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl glass-strong shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 border-b border-white/5 p-4">
              <div className="grid h-9 w-9 place-items-center rounded-full btn-aurora">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Abdullah AI</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-300">Online</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "btn-aurora text-white"
                        : "glass text-white/85"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl px-3.5 py-2.5">
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {messages.length <= 2 && (
              <div className="border-t border-white/5 p-3">
                <p className="mb-2 text-[10px] uppercase tracking-widest text-white/50">Try asking</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full glass px-2.5 py-1 text-[11px] text-white/75 hover:bg-white/10"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/5 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Abdullah..."
                maxLength={300}
                className="flex-1 rounded-full glass px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-[oklch(0.72_0.19_295)]/60"
              />
              <button
                type="submit"
                className="grid h-10 w-10 place-items-center rounded-full btn-aurora"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}