import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, ArrowUpRight, Code2, Smartphone, Palette, Cloud, RefreshCw, ShieldCheck, Globe, Briefcase, Users, MapPin, Phone, Mail, Layers, Cpu } from 'lucide-react';

// ── Knowledge Base ─────────────────────────────────────────────────────────────
const knowledgeBase = [
    {
        patterns: ['hello', 'hi', 'hey', 'hii', 'good morning', 'good evening', 'howdy'],
        response: "Hi there! I'm **Vibe**, the VibeX Technologies assistant. How can I help you today?",
        chips: ['What do you do?', 'Contact Info', 'Our Work', 'How to start?'],
    },
    {
        patterns: ['service', 'what do you do', 'what you do', 'build', 'offer', 'develop', 'expertise'],
        response: "We build **end-to-end digital products** — from idea to launch. Our core services:\n\n› Web App Development\n› Mobile App Development\n› UI/UX Design\n› Cloud & DevOps\n› Workflow Automation\n› Security & Audits",
        chips: ['How to start a project?', 'See our work', 'Get in touch'],
    },
    {
        patterns: ['price', 'cost', 'pricing', 'how much', 'rate', 'charges', 'budget', 'affordable'],
        response: "Our pricing is fully **scope-based** and depends on the size, complexity, and scalability of your project.\n\nWe offer flexible development models:\n\n• MVP Development · Rapid launch builds\n• Custom Software · Full bespoke platforms\n• Dedicated Team · Ongoing engineering support\n\nBook a **free consultation** and we'll give you a tailored quote.",
        chips: ['Book free consultation', 'What do you build?', 'Contact us'],
    },
    {
        patterns: ['contact', 'reach', 'phone', 'email', 'call', 'talk', 'speak', 'get in touch'],
        response: "You can reach us at:\n\n◦ +91 9004575835 (Mon–Sat, 9am–6pm IST)\n◦ vibextechnologies.business@gmail.com\n◦ Mumbai, Maharashtra, India\n\nOr use the **contact form** on our Contact page.",
        chips: ['Visit contact page', 'What services you offer?', 'How to start?'],
    },
    {
        patterns: ['portfolio', 'work', 'project', 'case study', 'example', 'client', 'built'],
        response: "Here are some projects we're proud of:\n\n• Campus Buddy · Student management app\n• Xcrypt · Crypto payment gateway\n• JRE Services · Commercial web platform\n• DMCT Healthcare · Patient portal\n• Recipe Hub · Full-stack SaaS\n\nVisit our **Portfolio page** for more details.",
        chips: ['How to start a project?', 'See our work', 'Contact us'],
    },
    {
        patterns: ['start', 'begin', 'new project', 'process', 'how do we', 'how to work', 'onboard'],
        response: "Starting is simple. Here's our process:\n\n1 · Free call — discuss your vision\n2 · Proposal — scope & timeline\n3 · Design — wireframes & prototyping\n4 · Build — agile development sprints\n5 · Launch — deployment & handover\n6 · Support — ongoing maintenance",
        chips: ['Book a free call', 'See our work', 'Contact us'],
    },
    {
        patterns: ['location', 'where', 'mumbai', 'india', 'office', 'based', 'hq', 'headquarter'],
        response: "We're headquartered in **Mumbai, Maharashtra, India**.\n\nWe work with clients **globally** — across India, UAE, US, and UK. All project communication is done remotely via video calls, Slack, and project tracking tools.",
        chips: ['Contact us', 'What do you build?', 'How to start?'],
    },
    {
        patterns: ['team', 'founder', 'who', 'about', 'ajay', 'people', 'staff', 'size'],
        response: "VibeX Technologies was founded by **Ajaymohan**, a passionate software developer. Our team includes:\n\n› Expert Developers\n› UI/UX Designers\n› QA Engineers\n› Project Managers\n\nWith **3+ years** of industry experience.",
        chips: ['See our work', 'Contact us', 'What do you build?'],
    },
    {
        patterns: ['technolog', 'tech stack', 'framework', 'language', 'react', 'node', 'flutter'],
        response: "We work with modern tech stacks:\n\n◦ Frontend  · React, Next.js, Flutter\n◦ Backend   · Node.js, Python, Java\n◦ Database  · PostgreSQL, MongoDB, Firebase\n◦ Cloud     · AWS, GCP, Vercel\n◦ Mobile    · React Native, Flutter",
        chips: ['See our work', 'Start a project', 'Contact us'],
    },
    {
        patterns: ['thank', 'thanks', 'okay', 'ok', 'great', 'awesome', 'perfect', 'got it', 'nice'],
        response: "You're welcome! Is there anything else I can help you with?",
        chips: ['Services?', 'How to start?', 'Contact us'],
    },
];

const defaultChips = ['What do you build?', 'How to start?', 'See our work', 'Contact us'];

function getBotResponse(input) {
    const lower = input.toLowerCase();
    for (const item of knowledgeBase) {
        if (item.patterns.some(p => lower.includes(p))) {
            return { response: item.response, chips: item.chips };
        }
    }
    return {
        response: "I'm not sure about that one, but I'd love to help. Please reach out directly:\n\n◦ +91 9004575835\n◦ vibextechnologies.business@gmail.com",
        chips: ['What do you build?', 'How to start?', 'Contact us'],
    };
}

// ── Markdown-lite renderer ─────────────────────────────────────────────────────
function renderText(text) {
    const lines = text.split('\n');
    return lines.map((line, i) => {
        const rendered = line.replace(/\*\*(.*?)\*\*/g, (_, m) => `<strong>${m}</strong>`);
        return <span key={i} dangerouslySetInnerHTML={{ __html: rendered + (i < lines.length - 1 ? '<br/>' : '') }} />;
    });
}

// ── Main Component ─────────────────────────────────────────────────────────────
const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: 'bot',
            text: "Hi! I'm **Vibe**, your VibeX assistant. Ask me anything about our services, projects, or how to get started.",
            chips: defaultChips,
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const sendMessage = (text) => {
        const userText = text || input.trim();
        if (!userText) return;
        setInput('');

        setMessages(prev => [...prev, { from: 'user', text: userText }]);
        setIsTyping(true);

        setTimeout(() => {
            const { response, chips } = getBotResponse(userText);
            setIsTyping(false);
            setMessages(prev => [...prev, { from: 'bot', text: response, chips }]);
        }, 900 + Math.random() * 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chatwindow"
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ duration: 0.22, type: 'spring', bounce: 0.25 }}
                        className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
                        style={{ maxHeight: '540px' }}
                    >
                        {/* Header */}
                        <div className="bg-corporate-navy px-5 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                                    <Sparkles size={16} className="text-accent-teal" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-white font-heading font-semibold text-sm tracking-tight">Vibe</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                        <span className="text-emerald-400 text-[11px] font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white"
                            >
                                <X size={14} strokeWidth={2} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className="flex flex-col gap-2 max-w-[88%]">
                                        <div
                                            className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.from === 'user'
                                                ? 'bg-corporate-navy text-white rounded-br-md'
                                                : 'bg-white text-slate-700 border border-slate-200 rounded-bl-md shadow-sm'
                                                }`}
                                        >
                                            {renderText(msg.text)}
                                        </div>
                                        {msg.chips && (
                                            <div className="flex flex-wrap gap-1.5">
                                                {msg.chips.map((chip, ci) => (
                                                    <button
                                                        key={ci}
                                                        onClick={() => sendMessage(chip)}
                                                        className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-600 hover:border-accent-teal hover:text-accent-teal px-3 py-1.5 rounded-full transition-all duration-200 tracking-wide"
                                                    >
                                                        {chip}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Typing indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 shadow-sm px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-slate-100 bg-white flex gap-2 items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                                placeholder="Ask anything..."
                                className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/15 transition-all text-slate-700 placeholder:text-slate-400"
                            />
                            <button
                                onClick={() => sendMessage()}
                                className="w-9 h-9 rounded-xl bg-corporate-navy hover:bg-accent-teal text-white flex items-center justify-center transition-colors duration-200 shrink-0"
                            >
                                <Send size={14} strokeWidth={2} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => setIsOpen(o => !o)}
                className="w-12 h-12 rounded-2xl bg-corporate-navy hover:bg-accent-teal text-white shadow-xl flex items-center justify-center transition-colors duration-300 border border-white/10 relative"
                aria-label="Open chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <X size={18} strokeWidth={2} />
                        </motion.span>
                    ) : (
                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <Sparkles size={18} strokeWidth={1.5} />
                        </motion.span>
                    )}
                </AnimatePresence>
                {/* Notification dot */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-60" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-teal" />
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;
