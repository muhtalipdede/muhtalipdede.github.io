import Link from "next/link";
import {
  ArrowDownIcon,
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

/* ─── Company Logo Component ──────────────────────────────────── */
const Logo = ({
  initials,
  from,
  to,
}: {
  initials: string;
  from: string;
  to: string;
}) => (
  <div
    className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${from} ${to} rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg flex-shrink-0`}
  >
    {initials}
  </div>
);

/* ─── Nav Links ───────────────────────────────────────────────── */
const NAV_ITEMS = [
  { href: "/apps", label: "Apps" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

/* ─── Reusable Section Heading ────────────────────────────────── */
const SectionHeading = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <header className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
      {icon}
      {title}
    </h2>
    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
      {subtitle}
    </p>
  </header>
);

/* ─── SVG Icon helpers ────────────────────────────────────────── */
const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GitHubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MediumIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
  </svg>
);

/* ─── Data ────────────────────────────────────────────────────── */
const PROGRAMMING_LANGUAGES = [
  { name: "C#", level: 95, years: "8", color: "from-blue-500 to-blue-600", description: "Expert in .NET ecosystem, microservices" },
  { name: "TypeScript", level: 90, years: "6", color: "from-blue-400 to-cyan-500", description: "Advanced React/Node.js development" },
  { name: "Python", level: 85, years: "5", color: "from-green-400 to-blue-500", description: "ML, data analysis, backend services" },
  { name: "JavaScript", level: 88, years: "7", color: "from-yellow-400 to-orange-500", description: "Full-stack web development" },
];

const CORE_COMPETENCIES = [
  { name: "Backend Development", level: 95, icon: "🔧" },
  { name: "Microservices Architecture", level: 90, icon: "🏗️" },
  { name: "Cloud Technologies", level: 88, icon: "☁️" },
  { name: "DevOps & CI/CD", level: 85, icon: "🚀" },
  { name: "Database Design", level: 90, icon: "🗄️" },
  { name: "System Architecture", level: 92, icon: "🏛️" },
];

const EXPERIENCE = [
  {
    title: "Senior Backend Engineer",
    company: "Roofstacks",
    logo: { initials: "RS", from: "from-blue-600", to: "to-blue-800" },
    period: "Sep 2023 – Present",
    location: "Remote",
    badge: { text: "Current", color: "bg-green-500/20 text-green-300" },
    dotColor: "bg-blue-500",
    description: "Leading backend development for travel industry solutions",
  },
  {
    title: "Senior Software Engineer",
    company: "Berkut Teknoloji",
    logo: { initials: "BT", from: "from-purple-600", to: "to-purple-800" },
    period: "Feb 2023 – Aug 2023",
    location: "Remote, Outsource",
    dotColor: "bg-purple-500",
    description: "Enterprise software solutions development",
  },
  {
    title: "Founding Engineer",
    company: "Datapad (500 Istanbul)",
    logo: { initials: "DP", from: "from-pink-600", to: "to-pink-800" },
    period: "Jan 2022 – Nov 2022",
    location: "Remote",
    badge: { text: "Startup", color: "bg-pink-500/20 text-pink-300" },
    dotColor: "bg-pink-500",
    description: "Built mobile-first data management system from scratch",
  },
  {
    title: "Senior Software Engineer",
    company: "Doğuş Teknoloji",
    logo: { initials: "DT", from: "from-green-600", to: "to-green-800" },
    period: "Apr 2021 – Jan 2022",
    location: "Remote",
    dotColor: "bg-green-500",
    description: "Led modernization of legacy systems",
  },
  {
    title: "Software Engineer Journey",
    company: "Doğuş Teknoloji",
    logo: { initials: "DT", from: "from-green-600", to: "to-green-800" },
    period: "Jul 2017 – Apr 2021",
    location: "Istanbul",
    badge: { text: "Growth", color: "bg-yellow-500/20 text-yellow-300" },
    dotColor: "bg-yellow-500",
    description: "Evolved from Junior to Senior Engineer",
  },
  {
    title: "Software Development Intern",
    company: "Halkbank BT",
    logo: { initials: "HB", from: "from-yellow-600", to: "to-yellow-800" },
    period: "Jun 2016 – Jul 2016",
    location: "Istanbul",
    badge: { text: "Internship", color: "bg-orange-500/20 text-orange-300" },
    dotColor: "bg-orange-500",
    description: "First hands-on experience in enterprise software development",
  },
];

const AWARDS = [
  { icon: "🏆", title: "Product Hunt", subtitle: "1st Place of the Day", gradient: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/30" },
  { icon: "📜", title: "Patent", subtitle: "Yıldız Technical University", extra: "Contactless Temperature Monitoring", gradient: "from-blue-500/20 to-purple-500/20", border: "border-blue-500/30" },
  { icon: "🥇", title: "Gold Medal", subtitle: "ISIF 2020", gradient: "from-yellow-500/20 to-yellow-600/20", border: "border-yellow-500/30" },
  { icon: "⭐", title: "High Performer", subtitle: "RoofStacks 2025", gradient: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
  { icon: "💼", title: "High Performer", subtitle: "Doğuş Teknoloji", extra: "2018, 2019", gradient: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
  { icon: "🎓", title: "TÜBİTAK Scholarship", subtitle: "2209A Research Grant", gradient: "from-red-500/20 to-pink-500/20", border: "border-red-500/30" },
];

const PROJECTS = [
  { name: "BiletDükkanı", badge: "B2B & B2C", badgeColor: "bg-blue-500/20 text-blue-300", hoverColor: "group-hover:text-blue-400", description: "SMART TRAVEL System with AI-powered chatbot assistant. Developed microservices architecture and integrated advanced messaging systems.", tech: ["C#", ".NET 8", "NodeJS", "Kafka", "GCP", "Azure", "Kubernetes"] },
  { name: "Datapad", badge: "500 Istanbul", badgeColor: "bg-purple-500/20 text-purple-300", hoverColor: "group-hover:text-purple-400", description: "Mobile-first data management system built from ground up. Cross-platform mobile app with microservices backend architecture.", tech: ["React Native", "NodeJS", "MongoDB", "AWS", "GCP", "ArgoCD", "Pulumi"] },
  { name: "Temperature Monitoring", badge: "Patented", badgeColor: "bg-green-500/20 text-green-300", hoverColor: "group-hover:text-green-400", description: "Contactless body temperature monitoring system with IoT sensors, machine learning, and mobile alerts. TÜBİTAK funded research project.", tech: ["Raspberry Pi", "Python", "ML", "Java", "Android", "IoT"] },
  { name: "VosVos & Zebra", badge: "FinTech", badgeColor: "bg-yellow-500/20 text-yellow-300", hoverColor: "group-hover:text-yellow-400", description: "Vehicle finance and dealer management systems. Modernized legacy monolithic applications to microservices architecture.", tech: ["C#", "Entity Framework", "PostgreSQL", "Docker", "Kubernetes", "Redis"] },
];

const ARTICLES = [
  { emoji: "🤖", category: "AI & ML", categoryColor: "text-blue-400", title: "Google Gemini API Structured Output", desc: "LLM'lerin daha dinamik ve güvenilir şekilde kullanımı", href: "https://medium.com/@muhtalipdede/google-gemini-api-structured-output-i%CC%87le-bir-llm-nas%C4%B1l-daha-dinamik-ve-g%C3%BCvenilir-bir-%C5%9Fekilde-c7bdc76618f1", gradient: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20", hoverBg: "hover:bg-blue-500/20", linkColor: "text-blue-400 hover:text-blue-300" },
  { emoji: "📊", category: "Research", categoryColor: "text-purple-400", title: "İnsanlığın Son Sınavı – LLM Değerlendirmesi", desc: "Büyük dil modellerinin başarım oranları derinlemesine araştırma", href: "https://medium.com/@muhtalipdede/i%CC%87nsanl%C4%B1%C4%9F%C4%B1n-son-s%C4%B1nav%C4%B1-b%C3%BCy%C3%BCk-dil-modellerinin-ba%C5%9Far%C4%B1m-oranlar%C4%B1n%C4%B1n-%C3%B6l%C3%A7%C3%BClmesi-derin-ara%C5%9Ft%C4%B1rma-4ac10f37e2e5", gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20", hoverBg: "hover:bg-purple-500/20", linkColor: "text-purple-400 hover:text-purple-300" },
  { emoji: "🏗️", category: "Architecture", categoryColor: "text-green-400", title: "Asenkron LLM Agent Mimarisi", desc: "Ölçeklenebilir ve esnek yapay zeka asistanları", href: "https://medium.com/@muhtalipdede/asenkron-llm-agent-mimarisi-%C3%B6l%C3%A7eklenebilir-ve-esnek-yapay-zeka-asistanlar%C4%B1-37b0053351ad", gradient: "from-green-500/10 to-emerald-500/10", border: "border-green-500/20", hoverBg: "hover:bg-green-500/20", linkColor: "text-green-400 hover:text-green-300" },
  { emoji: "🧠", category: "Memory Systems", categoryColor: "text-yellow-400", title: "AI Asistanları için Hafıza Yönetimi", desc: "Kişiselleştirilmiş yapay zeka sistemlerinde memory mimarisi", href: "https://medium.com/@muhtalipdede/ki%C5%9Fiselle%C5%9Ftirilmi%C5%9F-yapay-zeka-asistanlar%C4%B1-i%CC%87%C3%A7in-haf%C4%B1za-memory-y%C3%B6netimi-neden-%C3%B6nemlidir-4ff76a3b793e", gradient: "from-yellow-500/10 to-orange-500/10", border: "border-yellow-500/20", hoverBg: "hover:bg-yellow-500/20", linkColor: "text-yellow-400 hover:text-yellow-300" },
  { emoji: "🔗", category: "Integration", categoryColor: "text-red-400", title: "MCP – Otonom AI Araçları Entegrasyonu", desc: "Yapay zeka araçlarının iş süreçlerine entegrasyonu", href: "https://medium.com/@muhtalipdede/mcp-otonom-yapay-zeka-ara%C3%A7lar%C4%B1-i%CC%87%C5%9F-s%C3%BCre%C3%A7lerine-nas%C4%B1l-entegre-edilir-20348b29cb0a", gradient: "from-red-500/10 to-pink-500/10", border: "border-red-500/20", hoverBg: "hover:bg-red-500/20", linkColor: "text-red-400 hover:text-red-300" },
  { emoji: "🤝", category: "Microservices", categoryColor: "text-indigo-400", title: "CQRS vs API Composition", desc: "Mikroservislerde hangisini ne zaman kullanmalı", href: "https://medium.com/@muhtalipdede/cqrs-ve-api-composition-mikroservislerde-hangisini-ne-zaman-kullanmal%C4%B1-0968a857e560", gradient: "from-indigo-500/10 to-blue-500/10", border: "border-indigo-500/20", hoverBg: "hover:bg-indigo-500/20", linkColor: "text-indigo-400 hover:text-indigo-300" },
  { emoji: "🚀", category: "Autonomous AI", categoryColor: "text-teal-400", title: "Otonom Yapay Zeka Agentları", desc: "Agents – bağımsız karar alabilen AI sistemleri", href: "https://medium.com/@muhtalipdede/agents-otonom-yapay-zeka-agentlar%C4%B1-080fc98a9e62", gradient: "from-teal-500/10 to-cyan-500/10", border: "border-teal-500/20", hoverBg: "hover:bg-teal-500/20", linkColor: "text-teal-400 hover:text-teal-300" },
  { emoji: "📚", category: "RAG Systems", categoryColor: "text-violet-400", title: "RAG ile Güçlendirilmiş LLM", desc: "Retrieval Augmented Generation sistemleri", href: "https://medium.com/@muhtalipdede/rag-retrieval-augmented-generation-ile-g%C3%BC%C3%A7lendirilmi%C5%9F-llm-d519089fc080", gradient: "from-violet-500/10 to-purple-500/10", border: "border-violet-500/20", hoverBg: "hover:bg-violet-500/20", linkColor: "text-violet-400 hover:text-violet-300" },
];

/* ═══════════════════════════════════════════════════════════════ */
/*  PAGE COMPONENT                                                */
/* ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* Skip-to-content (accessibility) */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* ── Sticky Navigation ─────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/5"
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            MD
          </a>
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile nav */}
          <a
            href="#contact"
            className="md:hidden text-sm text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/10"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Ambient background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-400" />
        </div>

        <main id="main">
          {/* ═══ HERO ═══ */}
          <header className="relative min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10 w-full">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Avatar */}
                <div className="relative group" aria-hidden="true">
                  <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-5xl sm:text-6xl lg:text-7xl font-bold shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300">
                    MD
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Hero content */}
                <div className="flex-1 text-center lg:text-left text-white space-y-5 sm:space-y-6">
                  <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                      Muhtalip Dede
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-semibold mb-1">
                      Senior Backend Engineer
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-purple-300 font-medium">
                      Mathematical Engineer &amp; Tech Community Leader
                    </p>
                  </div>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                    My deep-rooted interest in mathematics and computing has driven me to pursue a
                    career in software engineering. Over the past 8 years, I&#39;ve gained hands-on
                    experience across various industries, including vehicle finance, SaaS, IoT, and
                    Tourism, building scalable systems and leading innovative projects.
                  </p>

                  {/* Contact badges */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 text-gray-300 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm sm:text-base">
                      <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <span>muhtalipdede@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm sm:text-base">
                      <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <span>Tekirdağ, Turkey</span>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2 sm:pt-4">
                    <a href="https://github.com/muhtalipdede" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                      <GitHubIcon className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/muhtalipdede" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                      <LinkedInIcon className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://thecoderverse.com" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                      <GlobeAltIcon className="w-4 h-4" /> Community
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
              <ArrowDownIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
            </div>
          </header>

          {/* ═══ TECHNICAL SKILLS ═══ */}
          <section id="skills" className="relative py-16 sm:py-20 bg-black/20 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={<CodeBracketIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />}
                title="Technical Expertise"
                subtitle="8+ years of experience with cutting-edge technologies across the full development stack"
              />

              {/* Programming Languages + Core Competencies */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                {/* Languages */}
                <article className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-400 rounded-full" aria-hidden="true" />
                    Programming Languages
                  </h3>
                  <div className="space-y-5 sm:space-y-6">
                    {PROGRAMMING_LANGUAGES.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-white font-semibold text-base sm:text-lg">{skill.name}</span>
                            <span className="text-[10px] sm:text-xs bg-white/20 text-gray-300 px-2 py-0.5 rounded-full">
                              {skill.years} yrs
                            </span>
                          </div>
                          <span className="text-gray-300 font-medium text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skill.name} proficiency`}
                          />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Competencies */}
                <article className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 sm:mb-8 flex items-center gap-3">
                    <span className="w-3 h-3 bg-purple-400 rounded-full" aria-hidden="true" />
                    Core Competencies
                  </h3>
                  <div className="space-y-4">
                    {CORE_COMPETENCIES.map((c) => (
                      <div key={c.name} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xl sm:text-2xl" aria-hidden="true">{c.icon}</span>
                            <span className="text-white font-medium text-sm sm:text-base">{c.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="hidden sm:flex">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mx-0.5 ${
                                    i < Math.floor(c.level / 20)
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                                      : "bg-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-300 text-xs sm:text-sm min-w-[2.5rem] text-right">
                              {c.level}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                            style={{ width: `${c.level}%` }}
                            role="progressbar"
                            aria-valuenow={c.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${c.name} proficiency`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              {/* Tech stack tags grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Backend */}
                <article className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                    Backend &amp; APIs
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { name: "ASP.NET Core", level: 95 },
                      { name: "Node.js", level: 88 },
                      { name: "FastAPI", level: 82 },
                      { name: "Express.js", level: 85 },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center justify-between">
                        <span className="text-gray-300 text-xs sm:text-sm">{t.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < Math.floor(t.level / 20) ? "bg-green-400" : "bg-gray-600"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Infrastructure */}
                <article className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
                    Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Kubernetes", "ArgoCD", "Nginx", "Redis"].map((t) => (
                      <span key={t} className="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full text-xs border border-blue-500/30">{t}</span>
                    ))}
                  </div>
                </article>

                {/* Cloud */}
                <article className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" aria-hidden="true" />
                    Cloud Platforms
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "AWS", level: 90, icon: "🟧" },
                      { name: "GCP", level: 85, icon: "🔵" },
                      { name: "Azure", level: 88, icon: "🟦" },
                    ].map((cloud) => (
                      <div key={cloud.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span aria-hidden="true">{cloud.icon}</span>
                          <span className="text-gray-300 text-xs sm:text-sm">{cloud.name}</span>
                        </div>
                        <div className="w-16 bg-gray-700/50 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" style={{ width: `${cloud.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Data */}
                <article className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" aria-hidden="true" />
                    Data &amp; Messaging
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Kafka", "RabbitMQ", "Firebase", "InfluxDB"].map((db) => (
                      <span key={db} className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs border border-orange-500/30">{db}</span>
                    ))}
                  </div>
                </article>
              </div>

              {/* Stats bar */}
              <div className="mt-10 sm:mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                  {[
                    { value: "8+", label: "Years Experience", color: "text-blue-400" },
                    { value: "50+", label: "Projects Delivered", color: "text-purple-400" },
                    { value: "15+", label: "Technologies Mastered", color: "text-green-400" },
                    { value: "5", label: "Industries Served", color: "text-pink-400" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ EXPERIENCE TIMELINE ═══ */}
          <section id="experience" className="relative py-16 sm:py-20 bg-black/30 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={<BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />}
                title="Professional Journey"
                subtitle="8+ years building innovative solutions across diverse industries"
              />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" aria-hidden="true" />

                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                  {EXPERIENCE.map((exp, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                      <article key={`${exp.company}-${exp.period}`} className="relative">
                        {/* Desktop: alternating left/right */}
                        <div className="hidden lg:flex items-start">
                          <div className="w-1/2 pr-8">
                            {isLeft && (
                              <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 ml-auto max-w-md">
                                <TimelineCard exp={exp} />
                              </div>
                            )}
                          </div>
                          <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-slate-900 z-10`} aria-hidden="true" />
                          <div className="w-1/2 pl-8">
                            {!isLeft && (
                              <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 max-w-md">
                                <TimelineCard exp={exp} />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Mobile: single-column */}
                        <div className="lg:hidden flex items-start gap-4 sm:gap-6">
                          <div className="relative flex-shrink-0 mt-1">
                            <div className={`w-3 h-3 sm:w-4 sm:h-4 ${exp.dotColor} rounded-full border-[3px] border-slate-900 z-10 ml-[5px] sm:ml-[7px]`} aria-hidden="true" />
                          </div>
                          <div className="flex-1 bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/10">
                            <TimelineCard exp={exp} />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ EDUCATION ═══ */}
          <section id="education" className="relative py-16 sm:py-20 bg-black/20 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={<AcademicCapIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />}
                title="Education"
                subtitle="Academic foundation in Mathematical Engineering"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* MSc */}
                <article className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Logo initials="YTÜ" from="from-red-600" to="to-red-800" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Master of Science</h3>
                        <p className="text-blue-400 font-medium text-base sm:text-lg">Mathematical Engineering</p>
                        <p className="text-purple-400 font-medium text-sm sm:text-base">Yıldız Technical University</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 bg-green-500/20 px-3 py-1 rounded-full whitespace-nowrap">Current</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">2024 – Current</p>
                  <div className="bg-blue-500/20 p-3 sm:p-4 rounded-lg border border-blue-500/30">
                    <p className="text-blue-300 font-medium text-sm">Thesis Topic:</p>
                    <p className="text-white text-sm sm:text-base">Multi Agent Systems</p>
                  </div>
                </article>

                {/* BSc */}
                <article className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Logo initials="YTÜ" from="from-red-600" to="to-red-800" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Bachelor&#39;s Degree</h3>
                        <p className="text-green-400 font-medium text-base sm:text-lg">Mathematical Engineering</p>
                        <p className="text-purple-400 font-medium text-sm sm:text-base">Yıldız Technical University</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 bg-yellow-500/20 px-3 py-1 rounded-full whitespace-nowrap">Honor Student</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">2013 – 2018</p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Strong foundation in mathematical modeling, algorithms, and computational methods
                    that drives my software engineering approach.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ═══ AWARDS ═══ */}
          <section id="awards" className="relative py-16 sm:py-20 bg-black/30 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={<TrophyIcon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />}
                title="Awards & Recognition"
                subtitle="Recognition for innovation and excellence in technology"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {AWARDS.map((award) => (
                  <article
                    key={award.title + award.subtitle}
                    className={`bg-gradient-to-br ${award.gradient} backdrop-blur-sm p-5 sm:p-6 rounded-2xl border ${award.border} hover:scale-[1.03] transition-all duration-300`}
                  >
                    <div className="text-3xl sm:text-4xl mb-3" aria-hidden="true">{award.icon}</div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{award.title}</h3>
                    <p className="text-gray-200 font-medium text-sm">{award.subtitle}</p>
                    {award.extra && <p className="text-gray-300 text-xs mt-1">{award.extra}</p>}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ FEATURED PROJECTS ═══ */}
          <section id="projects" className="relative py-16 sm:py-20 bg-black/20 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={<GlobeAltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />}
                title="Featured Projects"
                subtitle="Innovative solutions across diverse industries"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
                {PROJECTS.map((p) => (
                  <article key={p.name} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <h3 className={`text-xl sm:text-2xl font-semibold text-white ${p.hoverColor} transition-colors`}>{p.name}</h3>
                      <span className={`text-xs ${p.badgeColor} px-2 py-1 rounded-full whitespace-nowrap ml-2`}>{p.badge}</span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <a href="https://github.com/muhtalipdede?tab=repositories" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  View All Projects on GitHub <GitHubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* ═══ PUBLICATIONS ═══ */}
          <section id="publications" className="relative py-16 sm:py-20 bg-black/30 backdrop-blur-sm scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeading
                icon={
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
                title="Publications & Technical Writing"
                subtitle="Deep-dive articles on AI/ML, microservices, and modern software architecture"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {ARTICLES.map((a) => (
                  <article key={a.title} className={`bg-gradient-to-br ${a.gradient} backdrop-blur-sm p-5 sm:p-6 rounded-2xl border ${a.border} ${a.hoverBg} transition-all duration-300 group flex flex-col`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl sm:text-2xl" aria-hidden="true">{a.emoji}</span>
                      <span className={`${a.categoryColor} font-semibold text-xs sm:text-sm`}>{a.category}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-gray-100 transition-colors line-clamp-2 flex-1">
                      {a.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">{a.desc}</p>
                    <a href={a.href} target="_blank" rel="noopener noreferrer"
                       className={`inline-flex items-center gap-1.5 ${a.linkColor} text-xs sm:text-sm transition-colors mt-auto`}>
                      Read on Medium <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <a href="https://medium.com/@muhtalipdede" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  Follow on Medium <MediumIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* ═══ COMMUNITY & LANGUAGES ═══ */}
          <section className="relative py-16 sm:py-20 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Community */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">Community Leadership</h2>
                  <article className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-3 sm:mb-4">The Coderverse</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
                      Co-founder of a thriving software community hosting live broadcasts on YouTube,
                      collaborating on open-source projects, and organizing tech events across multiple platforms.
                    </p>
                    <a href="https://thecoderverse.com" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
                      Explore The Coderverse <ExternalLinkIcon />
                    </a>
                  </article>
                </div>

                {/* Languages */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">Languages</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { name: "Turkish", level: "Native", color: "text-blue-400", barColor: "from-blue-500 to-blue-600", width: "w-full" },
                      { name: "English", level: "Professional", color: "text-green-400", barColor: "from-green-500 to-green-600", width: "w-4/5" },
                    ].map((lang) => (
                      <article key={lang.name} className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-white font-semibold text-sm sm:text-base">{lang.name}</span>
                          <span className={`${lang.color} text-sm`}>{lang.level}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${lang.barColor} h-2 rounded-full ${lang.width}`} />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ═══ FOOTER / CONTACT ═══ */}
        <footer id="contact" className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Let&#39;s Build Something Amazing Together
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
                I&#39;m always excited to discuss new opportunities, innovative projects, and
                cutting-edge technologies. Let&#39;s connect and create the future of software engineering.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
                <a href="mailto:muhtalipdede@gmail.com"
                   className="group inline-flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Email Me
                </a>
                <a href="https://linkedin.com/in/muhtalipdede" target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-center gap-2 bg-blue-700/20 hover:bg-blue-700/30 border border-blue-600/30 text-blue-300 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" /> LinkedIn
                </a>
                <a href="https://github.com/muhtalipdede" target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-center gap-2 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 text-gray-300 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" /> GitHub
                </a>
                <a href="https://thecoderverse.com" target="_blank" rel="noopener noreferrer"
                   className="group inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5" /> The Coderverse
                </a>
              </div>

              <div className="border-t border-white/10 pt-6 sm:pt-8">
                <p className="text-gray-500 text-xs sm:text-sm">
                  &copy; 2026 Muhtalip Dede. Crafted with passion for technology and innovation.
                  {" · "}
                  <Link href="/apps" className="text-gray-400 hover:text-white">
                    Apps
                  </Link>
                </p>
                <blockquote className="text-gray-400 text-xs sm:text-sm mt-4 max-w-3xl mx-auto italic leading-relaxed">
                  &quot;Imagination is more important than knowledge. For knowledge is limited to all
                  we now know and understand, while imagination embraces the entire world, and all
                  there ever will be to know and understand.&quot;
                  <footer className="text-gray-500 text-xs mt-2 not-italic">— Albert Einstein</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── Timeline Card Sub-Component ─────────────────────────────── */
function TimelineCard({ exp }: { exp: (typeof EXPERIENCE)[number] }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <Logo initials={exp.logo.initials} from={exp.logo.from} to={exp.logo.to} />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-blue-400 font-medium text-xs sm:text-sm">{exp.company}</p>
          </div>
          {exp.badge && (
            <span className={`text-[10px] sm:text-xs ${exp.badge.color} px-2 py-0.5 rounded whitespace-nowrap`}>
              {exp.badge.text}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mb-1">
          {exp.period} &bull; {exp.location}
        </p>
        <p className="text-gray-400 text-xs">{exp.description}</p>
      </div>
    </div>
  );
}
