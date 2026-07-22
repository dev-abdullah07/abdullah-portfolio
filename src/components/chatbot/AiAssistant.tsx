import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X, Sparkles, User } from "lucide-react";
import { matchIntent, suggestedQuestions } from "../../data/chatbotKnowledge";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const initialMessage: Message = {
  id: 0,
  role: "bot",
  text: "Hi, I'm Abdullah AI. Ask me about M. Abdullah's skills, projects, experience, or how to get in touch — I only know about his portfolio, so I'll keep to that.",
};

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate a brief "thinking" delay for a natural feel — everything below is local.
    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      const reply = matchIntent(trimmed);
      setMessages((m) => [...m, { id: Date.now() + 1, role: "bot", text: reply }]);
      setTyping(false);
    }, delay);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Abdullah AI assistant"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] hover:scale-105 active:scale-95 transition-transform glow-violet"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] glass rounded-2xl flex flex-col overflow-hidden glow-violet"
          >
            {/* header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--color-border)]">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan)] flex items-center justify-center text-white">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="font-display font-semibold text-sm">Abdullah AI</p>
                <p className="text-[11px] text-[var(--color-cyan)] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" /> offline knowledge base
                </p>
              </div>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && (
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[var(--color-panel-2)] flex items-center justify-center text-[var(--color-cyan)]">
                      <Bot size={14} />
                    </span>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "text-white bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan-dim)] rounded-br-sm"
                        : "bg-[var(--color-panel-2)] text-[var(--color-ink-soft)] rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.role === "user" && (
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[var(--color-panel-2)] flex items-center justify-center text-[var(--color-violet)]">
                      <User size={14} />
                    </span>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex gap-2 justify-start">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[var(--color-panel-2)] flex items-center justify-center text-[var(--color-cyan)]">
                    <Bot size={14} />
                  </span>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[var(--color-panel-2)] flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-mute)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length <= 1 && !typing && (
                <div className="pt-2 flex flex-col gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-left text-xs font-mono px-3 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-ink-soft)] hover:border-[var(--color-violet)] hover:text-[var(--color-ink)] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-[var(--color-border)] flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-3.5 py-2.5 rounded-lg bg-[var(--color-panel-2)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-[var(--color-violet)]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-[var(--color-violet)] to-[var(--color-cyan-dim)] hover:opacity-90 transition-opacity"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
