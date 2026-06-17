import { useState, useEffect, useRef } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Award, 
  BookOpen, 
  Terminal, 
  ArrowRight, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowUpRight, 
  ChevronRight, 
  Calendar, 
  Play, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Laptop, 
  CornerDownRight, 
  Coins, 
  Lock, 
  AlertTriangle,
  Sparkles,
  RefreshCw,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types
interface LedgerItem {
  id: string;
  date: string;
  title: string;
  type: "win" | "loss";
  client: string;
  category: "Short-form clips" | "Video Contract" | "High-End Video Edit" | "Micro-payout" | "Scam" | "Trading Tuition";
  gross: number;
  unrealizedOrLoss: number;
  description: string;
  lesson: string;
  tag: string;
}

export default function App() {
  // Navigation & UI States
  const [activeTab, setActiveTab] = useState<"pitch" | "reality">("reality");
  const [ledgerFilter, setLedgerFilter] = useState<"all" | "win" | "loss">("all");
  const [selectedLedgerItem, setSelectedLedgerItem] = useState<string | null>(null);
  const [activeTerminalId, setActiveTerminalId] = useState<"agent" | "react" | "ielts">("agent");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Active terminal commands text logs based on real hard skills and focus
  const terminalLogs = {
    agent: [
      "[SYSTEM] Initializing Turan's Development Workspace...",
      "► Target: Custom AI automated agency agents & automations",
      "► Tech Stack: Node.js serverless orchestration model",
      "► Security context: Environment credentials loaded successfully",
      "⚡ Running integration audit... OK",
      "⚙️ Active APIs connected: Deep research modules, Web Search, FS-IO",
      "⚡ TASK INITIATED: 'Construct automated target agent script'",
      "⌛ Status: Ready for programmatic execution.",
      "✓ Completed workflow cleanly in 450ms.",
      "🤖 Standby for next project task."
    ],
    react: [
      "[VITE CLIENT] Spinning up local compilation environment...",
      "✓ Engine: React with Vite bundler",
      "✓ Tailwind CSS compilation successful",
      "► Output target: High-fidelity interactive site preview",
      "⚡ Local dev server booted cleanly",
      "✓ Assets loaded. Critical path size minimized.",
      "✨ Bundle verified and fully optimized!"
    ],
    ielts: [
      "[TRACKER] Loading daily academic milestones...",
      "⚡ Directives: Quantitative SAT preparation & reading focus",
      "⚙️ System diagnostics: Scoring accuracy metric running high",
      "► Current quantitative accuracy status: 83%",
      "► SAT focus objective: High-Tier math score strategy",
      "✓ Unbroken streak: Active focus discipline maintained",
      "✓ Study suite optimized on laptop setup successfully",
      "✨ Self-learning framework fully initialized."
    ]
  };

  // Prevent browser scroll restoration on reload and force scroll to top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Scroll Progress and Active Section Tracker (IntersectionObserver)
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);

    // Track active sections & manage live scroll reveal visibility
    const sections = ["hero", "pivot", "timeline", "dashboard", "academic", "terminal"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section dominates screen center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Reveal Observer for scroll entrance animations on load and as we scroll
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.02
    });

    // Dynamically query and observe all elements featuring 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      revealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, []);

  // Live typing effect simulator for terminal
  useEffect(() => {
    setIsTyping(true);
    setTerminalOutput([]);
    let currentLineIndex = 0;
    const lines = terminalLogs[activeTerminalId] || [];
    
    const interval = setInterval(() => {
      if (currentLineIndex < lines.length) {
        const nextLine = lines[currentLineIndex];
        if (typeof nextLine === "string") {
          setTerminalOutput(prev => [...prev, nextLine]);
        }
        currentLineIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [activeTerminalId]);

  // Financial Ledger Data (Every Dollar Accounted For)
  const financialLedger: LedgerItem[] = [
    {
      id: "tx-01",
      date: "",
      title: "First Commercial Contract (Belgrade/Serbia)",
      type: "win",
      client: "Clipper from EU region",
      category: "Short-form clips",
      gross: 118,
      unrealizedOrLoss: 0,
      description: "Delivered highly responsive, fast-paced TikTok & Instagram Reel shorts incorporating kinetic typography and visual frame tricks. This was my first true proof of technical value.",
      lesson: "Commercial validation is real. It proved that customers are willing to pay standard currency for high-tier Adobe suite output.",
      tag: "Skill Proof"
    },
    {
      id: "tx-02",
      date: "",
      title: "Cold-Outreach Video Campaign Strategy",
      type: "win",
      client: "Siberian / Russian YouTuber",
      category: "Video Contract",
      gross: 42,
      unrealizedOrLoss: 0,
      description: "Discovered an active channel with subpar video quality and unpolished audio lines. Formulated an active strategy, editing a promotional demo completely for free, which instantly closed a $42 production contract.",
      lesson: "Low pricing is part of early entry friction, but active outreach with bespoke custom value beats generic bidding platforms every time.",
      tag: "Cold Outreach"
    },
    {
      id: "tx-03",
      date: "",
      title: "Peak Complex Edit Record Realized",
      type: "win",
      client: "High-Tier YouTube Creator",
      category: "High-End Video Edit",
      gross: 125,
      unrealizedOrLoss: 0,
      description: "Executed a complete, high-stress visual edit utilizing deep Adobe After Effects composition, custom mask structures, sub-titles, ambient sound design, and color grading parameters.",
      lesson: "Value scale corresponds to technical complexity. Clients are willing to pay high multiples when Adobe After Effects is fully mastered.",
      tag: "Peak Return"
    },
    {
      id: "tx-04",
      date: "",
      title: "Dynamic Gigs & Freelance Sprints",
      type: "win",
      client: "Assorted Global Creators",
      category: "Micro-payout",
      gross: 85,
      unrealizedOrLoss: 0,
      description: "Processed multiple micro-gigs ranging from swift 10-minute sound cleanups to rapid-response social clips paying roughly $10 to $18 each.",
      lesson: "Agile, small-ticket deals stabilize running capital reserves while keeping editing velocity exceptionally peak.",
      tag: "Scale Sprint"
    },
    {
      id: "tx-05",
      date: "",
      title: "Belgrade Creator Default Scenario",
      type: "loss",
      client: "EU Affiliate Video Contractor",
      category: "Scam",
      gross: 0,
      unrealizedOrLoss: 30,
      description: "Completed three complex edits in record time. On final high-res delivery, the counterparty immediately deleted his discord account, blocked access, and exited without issuing the finalized payments.",
      lesson: "Never deliver un-watermarked high-res clean files. Provide heavily visual watermarked draft assets first, and only release clear master files upon complete escrow or payment realization.",
      tag: "Risk Lesson"
    },
    {
      id: "tx-06",
      date: "",
      title: "Manual Solana Memecoin Volatility Crash",
      type: "loss",
      client: "Decentralized Liquidity Pool",
      category: "Trading Tuition",
      gross: 0,
      unrealizedOrLoss: 60,
      description: "Attempted to speculate inside highly volatile Solana memecoin asset pools based on external market hypes and FOMO indicators. Lost the capital due to execution delays and manual trading exit slips.",
      lesson: "Speculative systems are highly negative-sum traps. Long term wealth yields from code, high-skill services, and intellectual assets — not from gambling in memecoin casinos.",
      tag: "Speculation Risk"
    },
    {
      id: "tx-07",
      date: "",
      title: "TikTok Automated Trading Bot Exploit",
      type: "loss",
      client: "Verified Channel Bot Operator",
      category: "Trading Tuition",
      gross: 0,
      unrealizedOrLoss: 230,
      description: "Swayed by fake visual reviews, forwarded $230 to an anonymous private calls channel admin for what was touted as an 'automated low-risk trading bot'. The operator immediately blocked me and stole the capital.",
      lesson: "The oldest trap in digital history: shortcuts are illusions. High value is engineered, not miraculously provided by anonymous bots. This was a valuable vaccination against high-ticket scams.",
      tag: "Scam Audit"
    }
  ];

  // Financial Summary Computations
  const totalGrossRevenue = financialLedger.reduce((sum, item) => sum + item.gross, 0);
  const totalScamsAndLosses = financialLedger.reduce((sum, item) => sum + item.unrealizedOrLoss, 0);
  const netEarnings = totalGrossRevenue - totalScamsAndLosses;

  // Filter logic
  const filteredLedger = financialLedger.filter(item => {
    if (ledgerFilter === "all") return true;
    return item.type === ledgerFilter;
  });

  return (
    <div id="landing-container" className="min-h-screen bg-brand-bg text-brand-text-dim font-sans antialiased relative">
      
      {/* Scroll indicator bar */}
      <div 
        id="ux-scroll-bar" 
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-brand-accent to-fuchsia-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Grid Pattern Mesh in absolute background */}
      <div className="absolute inset-0 bg-[radial-gradient(#26262a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Global Sophisticated Dark Ambient Flares */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[130px] pointer-events-none" />

      {/* Floating Header Panel */}
      <header className="sticky top-4 mx-auto max-w-7xl px-4 z-40 transition-all duration-300">
        <div className="glass-panel rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-brand-border shadow-2xl relative overflow-hidden">
          <div className="accent-glow" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-accent to-fuchsia-500 flex items-center justify-center font-bold text-white shadow-lg glow-purple">
              TM
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-brand-text-bright font-sans">PORTFOLIO & REPORT</h2>
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">Investor Accountability Desk</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-center text-[10.5px] sm:text-xs font-mono text-brand-text-dim bg-brand-bg/50 px-4 py-2 rounded-full border border-brand-border/60 animate-float shadow-inner">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-brand-text-bright font-medium tracking-wide">
              12 Months of Applied Grit & Accountability • No Excuses, Just Execution
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">

        {/* SECTION 1: THE HERO BANNER */}
        <section id="hero" className="reveal pt-8 md:pt-16 pb-8 text-center space-y-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border text-[11px] font-mono text-brand-accent shadow-md mb-4 relative overflow-hidden">
            <div className="accent-glow !w-8" />
            <Calendar className="w-3.5 h-3.5 text-brand-accent" />
            <span>ANNUAL REPORT: 1-YEAR MILESTONE REPORT</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-brand-text-bright leading-none animate-fade-in">
              The 1-Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-fuchsia-300 to-white font-serif font-normal italic">Investor Report</span>:<br />
              <span className="not-italic block mt-2 text-white font-extrabold tracking-tighter">Grit, Code & Growth.</span>
            </h1>
            <p className="text-base sm:text-xl text-brand-text-dim max-w-2xl mx-auto leading-relaxed">
              A comprehensive statement of active execution, skill evolution, financial ledger transparency, and ultimate proof of ROI for my Uncle.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8">
            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-brand-accent/40 transition-all duration-300">
              <div className="absolute top-2 right-2 p-1.5 bg-brand-accent/10 text-brand-accent rounded-lg">
                <Laptop className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-text-dim">Anchor Investment</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Lenovo Laptop</h3>
              <p className="text-[10px] font-mono text-brand-accent mt-1">Core GPU Acceleration Engine</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-subtle-accent/40 transition-all duration-300">
              <div className="absolute top-2 right-2 p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-text-dim">Total Sourced Revenue</p>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">$370.00</h3>
              <p className="text-[10px] font-mono text-emerald-400 mt-1 font-semibold">100% Sourced on Laptop tool</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-brand-accent/40 transition-all duration-300">
              <div className="absolute top-2 right-2 p-1.5 bg-brand-accent/10 text-brand-accent rounded-lg">
                <GraduationCap className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-text-dim">Education Standard</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">IELTS 7 Overall</h3>
              <p className="text-[10px] font-mono text-brand-accent mt-1">Currently crushing SAT prep</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group hover:border-brand-accent/40 transition-all duration-300">
              <div className="absolute top-2 right-2 p-1.5 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg">
                <Cpu className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-text-dim">Core Horizon Focus</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">AI & Code</h3>
              <p className="text-[10px] font-mono text-fuchsia-400 mt-1">TS, React, LLM Agents</p>
            </div>
          </div>

          <div className="pt-6">
            <a 
              href="#pivot" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-xl glow-purple hover:scale-[1.02]"
            >
              <span>Explore Narrative Evolution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>


        {/* SECTION 2: THE PROMISE VS. THE REALITY (THE PIVOT) */}
        <section id="pivot" className="reveal space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-accent uppercase block font-sans">01 / The Pivot</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal">
              The Promise vs. The Ground Reality
            </h2>
            <p className="text-brand-text-dim text-sm sm:text-base font-sans">
              A deeply transparent breakdown of the "Clipping" dream I pitched you a year ago, the actual technical walls I hit, and my rapid pivot to high-leverage skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">
            
            {/* The Pitch Card */}
            <div className="glass-panel rounded-2xl p-8 border-brand-border relative overflow-hidden flex flex-col justify-between hover:border-brand-accent/20 transition-all duration-300 group">
              <div className="accent-glow" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-white font-sans">The Pitch Framework</h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-accent">"Clipping Niche"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <blockquote className="border-l-2 border-brand-accent pl-4 py-1.5 text-brand-text-dim italic text-sm">
                    "Backed by Iman Gadzhi, clipping is a game-changer. I will make viral videos, host them on Whop, monetize from Day 1, and retire you in 4 months."
                  </blockquote>
                  
                  <div className="space-y-2 border-t border-brand-border pt-4 text-xs font-mono text-brand-text-dim">
                    <div className="flex justify-between">
                      <span>• Followers Required:</span>
                      <span className="text-emerald-400 font-semibold">None ✗</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• CPM Rate Expectation:</span>
                      <span className="text-emerald-400 font-semibold">$0.45 – $2.00+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Expected Tooling:</span>
                      <span className="text-brand-text-bright">Simple CapCut, Swift exports</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border">
                <div className="text-[11px] font-mono text-brand-accent bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-3">
                  ⚠️ <strong className="text-brand-text-bright">The Naive Excitement of Youth:</strong> I made that financial promise with complete gratitude for your support, but lacked real operational foresight regarding regional network restrictions.
                </div>
              </div>
            </div>

            {/* The Reality Check Card */}
            <div className="glass-panel rounded-2xl p-8 border-brand-border relative overflow-hidden flex flex-col justify-between hover:border-brand-accent/20 transition-all duration-300 group">
              <div className="accent-glow" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-white font-sans">The Technical Hard Wall</h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-accent">Operational Realities In Our Coordinates</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-brand-text-dim leading-relaxed">
                    Once the laptop was on my desk, the logistics mapping began. Simple clipping in our region cannot easily trigger US or Western viral traffic networks. 
                  </p>
                  
                  <ul className="space-y-2.5 text-xs text-brand-text-dim">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-0.5">◼</span>
                      <span><strong className="text-brand-text-bright">Algorithmic Geolocation Gates:</strong> Standard uploads target regional users. Bypassing this requires continuous physical US proxy routing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-0.5">◼</span>
                      <span><strong className="text-brand-text-bright">Overhead Friction:</strong> Demands multiple physical burner phones, specific VPN configurations, and substantial upfront running expenses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent mt-0.5">◼</span>
                      <span><strong className="text-brand-text-bright">The Hard Truth:</strong> Saturation was high, and standard automated clipping platforms paid pennies, completely gating the path.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border">
                <div className="text-[11px] font-mono text-brand-accent bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-3">
                  💡 <strong className="text-brand-text-bright">The Evolutionary Pivot:</strong> Instead of admitting defeat, I realized that the laptop's key asset wasn't clipping, but its pure hardware. Direct power to master high-end rendering suites.
                </div>
              </div>
            </div>

          </div>

          {/* The Shift Visual Illustration */}
          <div className="glass-panel-glow rounded-3xl p-8 relative overflow-hidden">
            <div className="accent-glow" />
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-[10px] font-mono border border-brand-accent/20">
                  <Cpu className="w-3 h-3 text-brand-accent" />
                  <span>HARD SKILLS MASTERCLASS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif italic text-white font-normal">
                  The Upgrade: From Consumer-Grade To Professional Engineering
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-dim leading-relaxed font-sans">
                  I quickly retired easy consumer video tools like CapCut. I spent two months grinding inside industry standards: <strong className="text-white font-semibold">Adobe Premiere Pro</strong> and <strong className="text-white font-semibold">Adobe After Effects</strong>. This transformed me from a basic "cutter" into a true digital editor capable of crafting complex kinetic compositions, masking layouts, professional audio cleanups, and visual narrative tracking.
                </p>
              </div>
              <div className="md:col-span-1" />
              <div className="md:col-span-4 bg-brand-bg rounded-2xl p-5 border border-brand-border space-y-4 font-mono text-[11px]">
                <div className="flex items-center justify-between border-b border-brand-border pb-2">
                  <span className="text-brand-text-dim">TRANSITION PIPELINE</span>
                  <span className="text-brand-accent font-bold">100% SUCCESS</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-brand-card/40 p-2 rounded border border-brand-border/40">
                    <span className="text-brand-text-dim line-through">CapCut (Mobile Level)</span>
                    <span className="text-brand-text-dim/80">→ Retracted</span>
                  </div>
                  <div className="flex justify-between items-center bg-brand-accent/10 p-2 rounded border border-brand-accent/30">
                    <span className="text-brand-text-bright font-semibold">Adobe Premiere Pro</span>
                    <span className="text-brand-accent">Mastered (4 Mos)</span>
                  </div>
                  <div className="flex justify-between items-center bg-brand-accent/10 p-2 rounded border border-brand-accent/30">
                    <span className="text-brand-text-bright font-semibold">Adobe After Effects</span>
                    <span className="text-brand-accent">SFX / Keyframe Maxed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: THE APPRENTICESHIP & THE GRIND */}
        <section id="timeline" className="reveal space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-accent uppercase block font-sans">02 / The Grind</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal">
              The Apprenticeship & The Grind
            </h2>
            <p className="text-brand-text-dim text-sm sm:text-base font-sans leading-relaxed">
              How I traded immediate currency for high leverage: Sourcing global clients completely for FREE to build operational maturity.
            </p>
          </div>

          <div className="relative border-l border-brand-border ml-4 md:ml-32 py-4 space-y-12">
            
            {/* Stage 1 */}
            <div className="relative pl-8 md:pl-12 group animate-fade-in">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-brand-accent rounded-full ring-4 ring-brand-accent/20" />
              <div className="absolute left-[-125px] top-1 text-xs font-mono text-brand-text-dim hidden md:block text-right w-24">
                MONTH 01 - 02
              </div>
              <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden">
                <div className="accent-glow" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Software Initiation: The Steep Curve</h4>
                  <span className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-mono border border-brand-border text-brand-text-dim">Phase I</span>
                </div>
                <p className="text-xs text-brand-text-dim leading-relaxed font-sans">
                  Spent 12 hours a day rendering complex video compositions. Overcoming initial lag in keyframing, discovering spatial interpolation, audio compression protocols, and high frequency audio filters.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">H264/H265 Optimization</span>
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">Adobe Media Encoder configurations</span>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative pl-8 md:pl-12 group animate-fade-in">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-brand-accent rounded-full ring-4 ring-brand-accent/20" />
              <div className="absolute left-[-125px] top-1 text-xs font-mono text-brand-text-dim hidden md:block text-right w-24">
                MONTH 03 - 04
              </div>
              <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden">
                <div className="accent-glow" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Unpaid Strategic Sprints: Raw Leverage</h4>
                  <span className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-mono border border-brand-border text-brand-text-dim">Phase II</span>
                </div>
                <p className="text-xs text-brand-text-dim leading-relaxed font-sans">
                  Offered 4 months of editing completely for free to prominent creators. It wasn't "free labor"—it was an intense, real sandbox. I mastered real-time delivery timelines, took brutal client feedback, and discovered how the creator marketplace structured transaction loops.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">Zero Agency Risk</span>
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">Client Acquisition Testbed</span>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative pl-8 md:pl-12 group animate-fade-in">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-brand-accent rounded-full ring-4 ring-brand-accent/20" />
              <div className="absolute left-[-125px] top-1 text-xs font-mono text-brand-text-dim hidden md:block text-right w-24">
                MONTH 05 - 08
              </div>
              <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-brand-accent/30 transition-all duration-300 relative overflow-hidden">
                <div className="accent-glow" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">The Commercial Gateway</h4>
                  <span className="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-mono border border-brand-border text-brand-text-dim">Phase III</span>
                </div>
                <p className="text-xs text-brand-text-dim leading-relaxed font-sans">
                  Landed my first paid contracts. Refined my speed to compile high complexity visual stories in record hours. Discovered how high design quality directly boosts retention metrics on YouTube and TikTok.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">Commercial Engagement</span>
                  <span className="px-2 py-0.5 bg-brand-bg border border-brand-border rounded text-[9.5px] font-mono text-brand-accent">Retention engineering</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 4: THE LEDGER (WINS & LOSSES) */}
        <section id="dashboard" className="reveal space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-accent uppercase block font-sans">03 / The Balance</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal">
              The Transparency Ledger
            </h2>
            <p className="text-brand-text-dim text-sm sm:text-base font-sans leading-relaxed">
              A complete, double-entry financial report documenting every single dollar realized, alongside my "business tuition" fees paid to the digital market.
            </p>
          </div>

          {/* Ledger Dashboard Grid */}
          <div className="grid lg:grid-cols-12 gap-8 pt-4">
            
            {/* Live Financial Metrics View */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-2xl p-6 border-brand-border shadow-xl space-y-6 relative overflow-hidden">
                <div className="accent-glow" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-brand-accent">Ledger Analytics</h3>
                
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center pb-3 border-b border-brand-border">
                    <span className="text-brand-text-dim flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Total Sourced Revenue
                    </span>
                    <span className="text-emerald-400 font-bold font-mono text-sm">+${totalGrossRevenue.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-brand-border">
                    <span className="text-brand-text-dim flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      Audited Losses (Scams & Volatility)
                    </span>
                    <span className="text-rose-400 font-bold font-mono text-sm">-${totalScamsAndLosses.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-brand-border">
                    <span className="text-brand-text-dim flex items-center gap-2 text-white">
                      💡 Sourced Recovery Sprint
                    </span>
                    <span className="text-emerald-400 font-bold font-mono text-sm">+$90.00</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-brand-border">
                    <span className="text-brand-text-dim flex items-center gap-2">
                       📉 Solana Price Drop Compression
                    </span>
                    <span className="text-rose-400 font-mono text-xs">-$50.00</span>
                  </div>

                  <div className="bg-brand-bg rounded-xl p-4 border border-brand-border mt-4">
                    <p className="text-[10px] text-brand-text-dim/80 uppercase tracking-wider mb-1">True Capital Standing</p>
                    <div className="flex justify-between items-end">
                      <span className="text-md sm:text-lg font-bold text-white tracking-tight">~$40.00</span>
                      <span className="text-[9.5px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Active Liquid Balance</span>
                    </div>
                    <p className="text-[9.5px] text-brand-text-dim mt-2 leading-relaxed">
                      *Wiped out to $10 following the coin crash and bot exploit, immediately rebuilt by $90+ through swift client sprints, then compressed to ~$40 due to subsequent Solana market drops.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tuition wisdom panel */}
              <div className="glass-panel p-6 rounded-2xl border-brand-border bg-gradient-to-b from-brand-card to-brand-bg space-y-4 relative overflow-hidden">
                <div className="accent-glow !bg-fuchsia-500" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-brand-accent" />
                  Tuition Wisdom Realized
                </h4>
                <p className="text-xs text-brand-text-dim leading-relaxed font-sans italic">
                  "Most children lose money playing games. My losses weren't paid on luxury toys—they were paid inside absolute market combat. I learned hard-token verification, contract boundaries, and developed a complete security standard against bad actors. A cheap price to pay at 17 for absolute digital security for the next 70 years."
                </p>
              </div>
            </div>

            {/* Interactive Ledger list */}
            <div className="lg:col-span-8 glass-panel rounded-2xl border-brand-border shadow-xl overflow-hidden flex flex-col justify-between relative">
              
              <div>
                {/* Ledger Controls */}
                <div className="p-4 bg-brand-card border-b border-brand-border flex flex-wrap items-center justify-between gap-3 relative">
                  <div className="accent-glow !h-[1px] !bottom-0 !top-auto !w-full" />
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">Transaction Ledger Slices</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { setLedgerFilter("all"); setSelectedLedgerItem(null); }}
                      className={`px-3 py-1.5 rounded-lg text-[10.5px] font-mono transition-all duration-200 cursor-pointer ${ledgerFilter === "all" ? "bg-white text-black font-semibold shadow" : "text-brand-text-dim hover:text-white hover:bg-brand-bg border border-transparent hover:border-brand-border"}`}
                    >
                      All Items
                    </button>
                    <button 
                      onClick={() => { setLedgerFilter("win"); setSelectedLedgerItem(null); }}
                      className={`px-3 py-1.5 rounded-lg text-[10.5px] font-mono transition-all duration-200 cursor-pointer ${ledgerFilter === "win" ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30 shadow" : "text-brand-text-dim hover:text-white hover:bg-brand-bg border border-transparent hover:border-brand-border"}`}
                    >
                      Revenue
                    </button>
                    <button 
                      onClick={() => { setLedgerFilter("loss"); setSelectedLedgerItem(null); }}
                      className={`px-3 py-1.5 rounded-lg text-[10.5px] font-mono transition-all duration-200 cursor-pointer ${ledgerFilter === "loss" ? "bg-rose-500/10 text-rose-400 font-semibold border border-rose-500/30 shadow" : "text-brand-text-dim hover:text-white hover:bg-brand-bg border border-transparent hover:border-brand-border"}`}
                    >
                      Tuition Slashes
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-brand-border overflow-y-auto max-h-[420px] bg-brand-card/40">
                  <AnimatePresence mode="popLayout">
                    {filteredLedger.map((item) => (
                      <motion.div 
						id={`ledger-row-${item.id}`}
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedLedgerItem(selectedLedgerItem === item.id ? null : item.id)}
                        className={`p-4 gap-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-brand-bg/40 cursor-pointer transition-colors ${selectedLedgerItem === item.id ? "bg-brand-bg/60 border-l-2 border-brand-accent" : ""}`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.type === "win" ? "bg-emerald-400" : "bg-rose-400"}`} />
                            <h4 className="text-xs font-bold text-white tracking-wide">{item.title}</h4>
                          </div>
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] font-mono text-brand-text-dim">
                            <span>{item.date}</span>
                            <span>•</span>
                            <span className="text-brand-text-bright">{item.client}</span>
                            <span>•</span>
                            <span className="px-1.5 py-0.5 rounded bg-brand-bg text-brand-accent text-[9px] uppercase border border-brand-border">{item.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t border-brand-border sm:border-t-0 pt-2 sm:pt-0">
                          <span className="text-[10px] font-mono text-brand-text-dim sm:hidden">AMOUNT</span>
                          <span className={`text-xs font-mono font-extrabold ${item.type === "win" ? "text-emerald-400" : "text-rose-400"}`}>
                            {item.type === "win" ? `+$${item.gross}` : `-$${item.unrealizedOrLoss}`}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Ledger Inspector detail box */}
              <div className="p-4 bg-brand-card/80 border-t border-brand-border text-xs relative overflow-hidden">
                {selectedLedgerItem ? (
                  (() => {
                    const item = financialLedger.find(t => t.id === selectedLedgerItem);
                    if (!item) return null;
                    return (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center text-brand-text-bright font-semibold">
                          <span className="uppercase text-[9.5px] tracking-wider text-brand-accent font-mono font-bold">Ledger Context Audit</span>
                          <span className="text-[10px] font-mono bg-brand-bg px-2 py-0.5 rounded border border-brand-border text-brand-accent">{item.tag}</span>
                        </div>
                        <p className="text-brand-text-bright leading-relaxed text-xs">{item.description}</p>
                        <div className="bg-brand-bg/90 border border-brand-border p-3 rounded-lg text-[11px] flex items-start gap-2.5">
                          <span className="text-brand-accent font-bold font-mono">LESSON:</span>
                          <p className="text-brand-text-dim italic font-sans font-medium">"{item.lesson}"</p>
                        </div>
                      </motion.div>
                    );
                  })()
                ) : (
                  <p className="text-brand-text-dim text-center py-2 font-mono text-[10.5px]">
                    💡 Click on any transaction line above to inspect audit descriptions & strategic lessons.
                  </p>
                )}
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 5: THE ACADEMIC ENGINE */}
        <section id="academic" className="reveal space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-accent uppercase block font-sans">04 / Academic Engine</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal">
              The Academic Engine: High Stakes Acceleration
            </h2>
            <p className="text-brand-text-dim text-sm sm:text-base font-sans leading-relaxed">
              Beyond commercial loops, the high-performance processor in the laptop has driven massive academic acceleration. Slicing complex manuals, executing PDF parsers, and processing mock tests at peak output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">
            
            {/* Academic Card 1: IELTS Completion */}
            <div className="glass-panel rounded-3xl p-8 border-brand-border relative overflow-hidden flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-300 group">
              <div className="accent-glow" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-accent/10 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent">
                      <Award className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <h3 className="text-md font-bold text-white font-sans">IELTS Success Standard</h3>
                      <p className="text-[10px] font-mono text-brand-accent uppercase tracking-wider font-semibold">C1 Professional competency</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-fuchsia-400 font-mono tracking-tighter">7</span>
                </div>

                <p className="text-xs text-brand-text-dim leading-relaxed font-sans">
                  The laptop became my daily preparation terminal. The high-performance hardware and crisp display accelerated daily reading lists and parsed complex audio mock tests, allowing me to comfortably achieve an overall <strong className="text-white font-semibold">7 Band score</strong>.
                </p>

                {/* Grid of IELTS subsections */}
                <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono pt-2">
                  <div className="bg-brand-bg py-2.5 px-3 rounded-lg border border-brand-border flex justify-between">
                    <span className="text-brand-text-bright">Reading:</span>
                    <strong className="text-brand-accent">6.5</strong>
                  </div>
                  <div className="bg-brand-bg py-2.5 px-3 rounded-lg border border-brand-border flex justify-between">
                    <span className="text-brand-text-bright">Listening:</span>
                    <strong className="text-brand-accent">7</strong>
                  </div>
                  <div className="bg-brand-bg py-2.5 px-3 rounded-lg border border-brand-border flex justify-between">
                    <span className="text-brand-text-bright">Speaking:</span>
                    <strong className="text-brand-accent">7</strong>
                  </div>
                  <div className="bg-brand-bg py-2.5 px-3 rounded-lg border border-brand-border flex justify-between">
                    <span className="text-brand-text-bright">Writing:</span>
                    <strong className="text-brand-accent">6.5</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-[11px] font-mono text-brand-accent select-none font-semibold">
                ✓ Certified and finalized credentials ready for global integration pathways.
              </div>
            </div>

            {/* Academic Card 2: SAT Study Engine */}
            <div className="glass-panel rounded-3xl p-8 border-brand-border relative overflow-hidden flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-300 group">
              <div className="accent-glow !bg-fuchsia-500" />
              <div className="absolute top-0 right-0 w-36 h-36 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-500/10 transition-colors" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-fuchsia-400">
                      <BookOpen className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <h3 className="text-md font-bold text-white font-sans">Daily SAT Preparation</h3>
                      <p className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-wider font-semibold">Quantitative & Verbal SAT focus</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-fuchsia-400 font-bold bg-fuchsia-500/10 border border-fuchsia-500/25 px-2 py-0.5 rounded">IN PROGRESS</span>
                </div>

                <p className="text-xs text-brand-text-dim leading-relaxed font-sans">
                  Currently, the laptop is the central core of my highstakes daily <strong className="text-white font-semibold">SAT prep tracker</strong>. I run dense mathematical mock exams, parse massive analytics templates, and coordinate multiple vocabulary matrices.
                </p>

                {/* Prep targets indicators */}
                <div className="space-y-3.5 pt-2">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-end font-mono text-[10.5px]">
                      <span className="text-brand-text-dim">MATH CONFIDENCE SPEED:</span>
                      <strong className="text-emerald-400 font-bold">83% Accuracy</strong>
                    </div>
                    <div className="w-full bg-brand-bg rounded-full h-1.5 border border-brand-border">
                      <div className="bg-emerald-400 h-1 rounded-full" style={{ width: "83%" }} />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-end font-mono text-[10.5px]">
                      <span className="text-brand-text-dim">VERBAL EXAM TRACKING COMPOSITE:</span>
                      <strong className="text-brand-accent font-bold">65% Accuracy</strong>
                    </div>
                    <div className="w-full bg-brand-bg rounded-full h-1.5 border border-brand-border">
                      <div className="bg-brand-accent h-1 rounded-full" style={{ width: "65%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-[11px] font-mono text-brand-text-dim flex items-center justify-between">
                <span>⚡ Daily Grind Core: SAT Prep</span>
                <span className="text-brand-accent font-extrabold tracking-tight">Score Focus: 1530+ Goal</span>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 6: THE NEXT FRONTIER (AI & WEB DEV) */}
        <section id="terminal" className="reveal space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.2em] font-extrabold text-brand-accent uppercase block font-sans">05 / Interactive Trajectory</span>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white font-normal">
              The Next Frontier: Engineering & Automated AI Systems
            </h2>
            <p className="text-brand-text-dim text-sm sm:text-base font-sans leading-relaxed">
              I have transitioned. I am no longer just a video editor. I am writing clean TypeScript, constructing layouts, and designing smart server-side workflows leveraging custom Gemini orchestration keys.
            </p>
          </div>

          {/* Interactive IDE Terminal Component */}
          <div className="glass-panel rounded-3xl border-brand-border shadow-2xl relative overflow-hidden">
            <div className="accent-glow" />
            
            {/* Window bar layout */}
            <div className="bg-brand-card/90 px-5 py-3.5 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-brand-text-dim ml-4">turan@lenovo-laptop: ~/projects/1year-report</span>
              </div>
              
              <div className="flex items-center gap-2 text-[10.5px] font-mono text-brand-accent">
                <Cpu className="w-3.5 h-3.5 text-brand-accent" />
                <span>LENOVO ACTIVE</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 min-h-[350px]">
              
              {/* Sidebar controls */}
              <div className="lg:col-span-3 bg-brand-card/20 p-5 border-b lg:border-b-0 lg:border-r border-brand-border space-y-4 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-brand-text-dim">Workspace Tasks</span>
                  
                  <button 
                    onClick={() => setActiveTerminalId("agent")}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2.5 transition-all text-brand-text-dim border cursor-pointer ${activeTerminalId === "agent" ? "bg-brand-accent/10 border-brand-accent/30 text-white font-semibold" : "border-transparent hover:bg-brand-bg"}`}
                  >
                    <Terminal className="w-4 h-4 text-brand-accent" />
                    <span>01. AI Agent Loop</span>
                  </button>

                  <button 
                    onClick={() => setActiveTerminalId("react")}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2.5 transition-all text-brand-text-dim border cursor-pointer ${activeTerminalId === "react" ? "bg-fuchsia-500/10 border-fuchsia-500/30 text-white font-semibold" : "border-transparent hover:bg-brand-bg"}`}
                  >
                    <Layers className="w-4 h-4 text-fuchsia-400" />
                    <span>02. UI Compiler</span>
                  </button>

                  <button 
                    onClick={() => setActiveTerminalId("ielts")}
                    className={`w-full text-left px-3 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2.5 transition-all text-brand-text-dim border cursor-pointer ${activeTerminalId === "ielts" ? "bg-brand-accent/10 border-brand-accent/30 text-white font-semibold" : "border-transparent hover:bg-brand-bg"}`}
                  >
                    <BookOpen className="w-4 h-4 text-brand-accent" />
                    <span>03. Academic Daily tracker</span>
                  </button>
                </div>

                <div className="p-3 bg-brand-bg border border-brand-border rounded-xl text-[10px] font-mono text-brand-text-dim leading-relaxed">
                  💡 High accuracy terminal execution represents total technology integration complete on asset laptop.
                </div>
              </div>

              {/* Terminal screen output */}
              <div className="lg:col-span-9 bg-brand-bg p-6 font-mono text-xs text-brand-accent/90 overflow-y-auto space-y-2 flex flex-col justify-between">
                
                <div className="space-y-1.5">
                  {terminalOutput.map((line, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: -5 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ duration: 0.1 }}
                      className={
                        !line ? "text-brand-text-bright" :
                        line.startsWith("[") ? "text-brand-text-dim" :
                        line.startsWith("✓") ? "text-emerald-400 font-semibold" :
                        line.startsWith("⚡") ? "text-fuchsia-450" :
                        line.startsWith("►") ? "text-brand-accent" :
                        "text-brand-text-bright"
                      }
                    >
                      {line}
                    </motion.p>
                  ))}
                  
                  {isTyping && (
                    <span className="inline-block w-2 h-4 bg-brand-accent animate-pulse" />
                  )}
                </div>

                {/* Subtext describing core weapon integration */}
                <div className="pt-6 border-t border-brand-border mt-6 text-[11px] font-sans text-brand-text-dim leading-relaxed max-w-3xl">
                  🚀 <strong className="text-white">And what about my Visual Skills?</strong> They are now my primary distribution weapons! Visual editing speeds our marketing content, driving viewers directly to automated systems and interfaces. Technology makes apps; cinematic pacing sells them.
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* SECTION 7: THE CLOSING (FINAL NOTE TO UNCLE) */}
        <section id="closing" className="reveal relative max-w-4xl mx-auto">
          
          <div className="absolute inset-0 bg-radial-flare pointer-events-none" />

          {/* Letter layout of Executive Report */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-brand-border shadow-2xl relative space-y-8 overflow-hidden">
            <div className="accent-glow" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-brand-border pb-6 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">CONFIDENTIAL MEMORANDUM</span>
                <h3 className="text-xl sm:text-2xl font-serif italic text-white font-normal tracking-tight">Statement of Executive Reflection</h3>
              </div>
              <div className="text-right font-mono text-[10.5px] text-brand-text-dim">
                <p>REF: 1-YEAR STATUS</p>
                <p className="text-brand-accent text-xs font-semibold">STATUS: SECURED INVESTOR REPORT</p>
              </div>
            </div>

            <div className="space-y-6 text-brand-text-dim text-sm leading-relaxed font-sans">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:italic first-letter:text-brand-accent first-letter:mr-2 first-letter:float-left first-letter:font-normal">
                Dear Uncle,
              </p>
              
              <p>
                Twelve months ago, I was a teenager armed with a colorful PDF slide-deck, and huge emotional enthusiasm. In my excitement to prove my value, I stood in your living room and promised that "I would retire you in four months." It was naive, yes. But it came from a pure place of hunger and absolute resolve to build a digital future.
              </p>

              <p>
                You didn't laugh. You didn't wave me off. You listened calmly, took my presentation seriously, and bought me a powerhouse visual-editing machine. It was a massive financial commitment, and an incredible gesture of raw trust in my character.
              </p>

              <p>
                Today, I am writing to transparently report: <strong className="text-brand-text-bright font-semibold">I did not retire you in four months.</strong> I hit massive algorithmic region barriers. Real operational limits forced me to immediately scrap outdated models.
              </p>

              <p>
                But here is your true <strong className="text-brand-text-bright font-semibold">Return on Investment</strong>. That laptop did not become a gaming console or a toy. It became my absolute command center. Because of your investment:
              </p>

              {/* Highlight list */}
              <ul className="grid sm:grid-cols-2 gap-4 text-xs font-mono text-brand-text-dim border-t border-b border-brand-border py-6 my-6">
                <li className="flex gap-2.5 items-start">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Mastered advanced industry standard software suites (Adobe After Effects / Premiere).</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Acquired resilience under threat: Survived scam events to develop permanent digital defense systems.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Constructed global commercial avenues, realizing first-ever dollars sourced through code & edit structures.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Pivoted securely to high stakes technological programming, automated agents, and database interfaces.</span>
                </li>
              </ul>

              <p>
                You purchased tools that accelerated my IELTS to a certified overall band of 7. You unlocked an environment where I tackle high stakes SAT math daily. You built security, accountability, and a digital work ethic that most young men take five years of college to understand. This is my foundation. I am ready to conquer.
              </p>

              <p className="pt-4 text-white font-semibold font-serif italic text-base">
                With ultimate gratitude and extreme execution fire,
              </p>
            </div>

            {/* Signature line design */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-border gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-white tracking-widest uppercase font-sans">TURAN MAMMADLI</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-brand-accent font-semibold">Founder / Engineer</p>
              </div>
              <div className="w-36 h-12 flex items-center justify-center border-l border-brand-border pl-4">
                <p className="text-xs font-mono text-brand-text-dim/80 italic uppercase">TURAN.SECURED</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Corporate Foot footer block */}
      <footer className="w-full bg-brand-bg/95 border-t border-brand-border py-12 text-center text-xs font-mono text-brand-text-dim space-y-4">
        <p>© Turan Mammadli. All Rights Realized through Extreme Humility & Hard Competencies.</p>
        <div className="flex justify-center gap-6">
          <span className="text-brand-text-dim/70 hover:text-brand-accent transition-colors cursor-pointer">SECURE TRANSCRIPTS REGISTERED</span>
          <span>•</span>
          <span className="text-brand-text-dim/70">COMPILED VIA INTELLECT ENGINE</span>
        </div>
      </footer>
    </div>
  );
}
