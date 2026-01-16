import Link from "next/link";
import { ArrowDownIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Company Logos Components
const RoofStacksLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    RS
  </div>
);

const BerkutLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    BT
  </div>
);

const DatapadLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    DP
  </div>
);

const DogusLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    DT
  </div>
);

const YTULogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    YTÜ
  </div>
);

const HalkbankLogo = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
    HB
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Header/Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-white text-7xl font-bold shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300">
                MD
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            
            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left text-white">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    Muhtalip Dede
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold mb-2">
                    Senior Backend Engineer
                  </h2>
                  <h3 className="text-xl text-purple-300 font-medium">
                    Mathematical Engineer & Tech Community Leader
                  </h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  My deep-rooted interest in mathematics and computing has driven me to pursue a career in software engineering. 
                  Over the past 8 years, I&#39;ve gained hands-on experience across various industries, including vehicle finance, 
                  SaaS, IoT, and Tourism, building scalable systems and leading innovative projects.
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 text-gray-300 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300">
                    <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                    <span>muhtalipdede@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300">
                    <MapPinIcon className="w-5 h-5 text-red-400" />
                    <span>Tekirdağ, Turkey</span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start pt-6">
                  <a href="https://github.com/muhtalipdede" target="_blank" rel="noopener noreferrer" 
                     className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/muhtalipdede" target="_blank" rel="noopener noreferrer" 
                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    LinkedIn
                  </a>
                  <a href="https://thecoderverse.com" target="_blank" rel="noopener noreferrer" 
                     className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="w-8 h-8 text-white/60" />
        </div>
      </header>

      {/* Tech Skills Section */}
      <section className="relative py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <CodeBracketIcon className="w-10 h-10 text-blue-400" />
              Technical Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              8+ years of experience with cutting-edge technologies across the full development stack
            </p>
          </div>
          
          {/* Primary Skills with Progress Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Programming Languages */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                Programming Languages
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'C#', level: 95, years: '8', color: 'from-blue-500 to-blue-600', description: 'Expert in .NET ecosystem, microservices' },
                  { name: 'TypeScript', level: 90, years: '6', color: 'from-blue-400 to-cyan-500', description: 'Advanced React/Node.js development' },
                  { name: 'Python', level: 85, years: '5', color: 'from-green-400 to-blue-500', description: 'ML, data analysis, backend services' },
                  { name: 'JavaScript', level: 88, years: '7', color: 'from-yellow-400 to-orange-500', description: 'Full-stack web development' }
                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                        <span className="text-xs bg-white/20 text-gray-300 px-2 py-1 rounded-full">
                          {skill.years} years
                        </span>
                      </div>
                      <span className="text-gray-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`
                        }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Radar */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-purple-400 mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                Core Competencies
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Backend Development', level: 95, icon: '🔧' },
                  { name: 'Microservices Architecture', level: 90, icon: '🏗️' },
                  { name: 'Cloud Technologies', level: 88, icon: '☁️' },
                  { name: 'DevOps & CI/CD', level: 85, icon: '🚀' },
                  { name: 'Database Design', level: 90, icon: '🗄️' },
                  { name: 'System Architecture', level: 92, icon: '🏛️' }
                ].map((competency) => (
                  <div key={competency.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{competency.icon}</span>
                        <span className="text-white font-medium">{competency.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full mx-0.5 transition-all duration-500 ${
                                i < Math.floor(competency.level / 20) 
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg' 
                                  : 'bg-gray-600'
                              }`}
                              style={{ 
                                animationDelay: `${i * 100}ms`
                              }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm min-w-[3rem] text-right">
                          {competency.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/30 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ 
                          width: `${competency.level}%`,
                          animationDelay: '200ms'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Backend Technologies */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Backend & APIs
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'ASP.NET Core', level: 95 },
                  { name: 'Node.js', level: 88 },
                  { name: 'FastAPI', level: 82 },
                  { name: 'Express.js', level: 85 }
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < Math.floor(tech.level / 20) 
                              ? 'bg-green-400 group-hover:bg-green-300' 
                              : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'ArgoCD', 'Nginx', 'Redis'].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                Cloud Platforms
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'AWS', level: 90, icon: '🟧' },
                  { name: 'GCP', level: 85, icon: '🔵' },
                  { name: 'Azure', level: 88, icon: '🟦' }
                ].map((cloud) => (
                  <div key={cloud.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{cloud.icon}</span>
                      <span className="text-gray-300 text-sm">{cloud.name}</span>
                    </div>
                    <div className="w-16 bg-gray-700/50 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${cloud.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                Data & Messaging
              </h3>
              <div className="space-y-2">
                {[
                  'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 
                  'Kafka', 'RabbitMQ', 'Firebase', 'InfluxDB'
                ].map((db) => (
                  <span 
                    key={db} 
                    className="inline-block bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs border border-orange-500/30 hover:bg-orange-500/30 transition-colors duration-200 cursor-default mr-1 mb-1"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Metrics */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-gray-300 text-sm">Technologies Mastered</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
                <div className="text-gray-300 text-sm">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <BriefcaseIcon className="w-10 h-10 text-blue-400" />
              Professional Journey
            </h2>
            <p className="text-gray-300 text-lg">8+ years building innovative solutions across diverse industries</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {/* Current Position */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 ml-auto max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <RoofStacksLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Senior Backend Engineer</h3>
                                <p className="text-blue-400 font-medium text-sm">Roofstacks</p>
                              </div>
                              <span className="text-xs text-gray-400 bg-green-500/20 px-2 py-1 rounded ml-2">Current</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Sep 2023 - Present • Remote</p>
                            <p className="text-gray-400 text-xs">Leading backend development for travel industry solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6"></div>
                  </div>
                </div>
              </div>

              {/* Previous Experience */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <BerkutLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Senior Software Engineer</h3>
                                <p className="text-purple-400 font-medium text-sm">Berkut Teknoloji</p>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Feb 2023 - Aug 2023 • Remote, Outsource</p>
                            <p className="text-gray-400 text-xs">Enterprise software solutions development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founding Engineer */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 ml-auto max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <DatapadLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Founding Engineer</h3>
                                <p className="text-pink-400 font-medium text-sm">Datapad (500 Istanbul)</p>
                              </div>
                              <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded ml-2">Startup</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Jan 2022 - Nov 2022 • Remote</p>
                            <p className="text-gray-400 text-xs">Built mobile-first data management system from scratch</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6"></div>
                  </div>
                </div>
              </div>

              {/* Senior Doğuş Experience */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <DogusLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Senior Software Engineer</h3>
                                <p className="text-green-400 font-medium text-sm">Doğuş Teknoloji</p>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Apr 2021 - Jan 2022 • Remote</p>
                            <p className="text-gray-400 text-xs">Led modernization of legacy systems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Junior to Senior Journey */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 ml-auto max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <DogusLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Software Engineer Journey</h3>
                                <p className="text-yellow-400 font-medium text-sm">Doğuş Teknoloji</p>
                              </div>
                              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded ml-2">Growth</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Jul 2017 - Apr 2021</p>
                            <p className="text-gray-400 text-xs">Evolved from Junior to Senior Engineer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6"></div>
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="flex items-center max-w-4xl w-full">
                    <div className="w-1/2 pr-6"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900 z-10"></div>
                    <div className="w-1/2 pl-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 max-w-md">
                        <div className="flex items-start gap-4 mb-4">
                          <HalkbankLogo />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white">Software Development Intern</h3>
                                <p className="text-orange-400 font-medium text-sm">Halkbank BT</p>
                              </div>
                              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded ml-2">Internship</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">Jun 2016 - Jul 2016</p>
                            <p className="text-gray-400 text-xs">First hands-on experience in enterprise software development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <AcademicCapIcon className="w-10 h-10 text-blue-400" />
              Education
            </h2>
            <p className="text-gray-300 text-lg">Academic foundation in Mathematical Engineering</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <YTULogo />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Master of Science</h3>
                    <p className="text-blue-400 font-medium text-lg">Mathematical Engineering</p>
                    <p className="text-purple-400 font-medium">Yıldız Technical University</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 bg-green-500/20 px-3 py-1 rounded-full">Current</span>
              </div>
              <p className="text-gray-300 mb-4">2024 - Current</p>
              <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 font-medium">Thesis Topic:</p>
                <p className="text-white">Multi Agent Systems</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <YTULogo />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Bachelor&#39;s Degree</h3>
                    <p className="text-green-400 font-medium text-lg">Mathematical Engineering</p>
                    <p className="text-purple-400 font-medium">Yıldız Technical University</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 bg-yellow-500/20 px-3 py-1 rounded-full">Honor Student</span>
              </div>
              <p className="text-gray-300 mb-4">2013 - 2018</p>
              <p className="text-gray-300">
                Strong foundation in mathematical modeling, algorithms, and computational methods 
                that drives my software engineering approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <TrophyIcon className="w-10 h-10 text-yellow-400" />
              Awards & Recognition
            </h2>
            <p className="text-gray-300 text-lg">Recognition for innovation and excellence in technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">🏆</div>
              <h3 className="text-white font-semibold text-lg mb-2">Product Hunt</h3>
              <p className="text-yellow-300 font-medium">1st Place of the Day</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">📜</div>
              <h3 className="text-white font-semibold text-lg mb-2">Patent</h3>
              <p className="text-blue-300 font-medium">Yıldız Technical University</p>
              <p className="text-gray-300 text-sm mt-2">Contactless Temperature Monitoring</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">🥇</div>
              <h3 className="text-white font-semibold text-lg mb-2">Gold Medal</h3>
              <p className="text-yellow-300 font-medium">ISIF 2020</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">⭐</div>
              <h3 className="text-white font-semibold text-lg mb-2">High Performer</h3>
              <p className="text-green-300 font-medium">RoofStacks 2025</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">💼</div>
              <h3 className="text-white font-semibold text-lg mb-2">High Performer</h3>
              <p className="text-purple-300 font-medium">Doğuş Teknoloji</p>
              <p className="text-gray-300 text-sm">2018, 2019</p>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30 hover:scale-105 transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">🎓</div>
              <h3 className="text-white font-semibold text-lg mb-2">TÜBİTAK Scholarship</h3>
              <p className="text-red-300 font-medium">2209A Research Grant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <GlobeAltIcon className="w-10 h-10 text-blue-400" />
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg">Innovative solutions across diverse industries</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">BiletDükkanı</h3>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">B2B & B2C</span>
              </div>
              <p className="text-gray-300 mb-4">
                SMART TRAVEL System with AI-powered chatbot assistant. Developed microservices architecture 
                and integrated advanced messaging systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['C#', '.NET 8', 'NodeJS', 'Kafka', 'GCP', 'Azure', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">Datapad</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">500 Istanbul</span>
              </div>
              <p className="text-gray-300 mb-4">
                Mobile-first data management system built from ground up. Cross-platform mobile app 
                with microservices backend architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React Native', 'NodeJS', 'MongoDB', 'AWS', 'GCP', 'ArgoCD', 'Pulumi'].map((tech) => (
                  <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition-colors">Temperature Monitoring</h3>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Patented</span>
              </div>
              <p className="text-gray-300 mb-4">
                Contactless body temperature monitoring system with IoT sensors, 
                machine learning, and mobile alerts. TÜBİTAK funded research project.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Raspberry Pi', 'Python', 'ML', 'Java', 'Android', 'IoT'].map((tech) => (
                  <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">VosVos & Zebra</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">FinTech</span>
              </div>
              <p className="text-gray-300 mb-4">
                Vehicle finance and dealer management systems. Modernized legacy monolithic 
                applications to microservices architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['C#', 'Entity Framework', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'].map((tech) => (
                  <span key={tech} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://github.com/muhtalipdede?tab=repositories" 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span>View All Projects on GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Publications & Writing */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Publications & Technical Writing
            </h2>
            <p className="text-gray-300 text-lg">Deep-dive articles on AI/ML, microservices, and modern software architecture</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* AI & Machine Learning Articles */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <span className="text-blue-400 font-semibold text-sm">AI & ML</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                Google Gemini API Structured Output
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                LLM&#39;lerin daha dinamik ve güvenilir şekilde kullanımı
              </p>
              <a href="https://medium.com/@muhtalipdede/google-gemini-api-structured-output-i%CC%87le-bir-llm-nas%C4%B1l-daha-dinamik-ve-g%C3%BCvenilir-bir-%C5%9Fekilde-c7bdc76618f1" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📊</span>
                <span className="text-purple-400 font-semibold text-sm">Research</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-purple-300 transition-colors">
                İnsanlığın Son Sınavı - LLM Değerlendirmesi
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Büyük dil modellerinin başarım oranları derinlemesine araştırma
              </p>
              <a href="https://medium.com/@muhtalipdede/i%CC%87nsanl%C4%B1%C4%9F%C4%B1n-son-s%C4%B1nav%C4%B1-b%C3%BCy%C3%BCk-dil-modellerinin-ba%C5%9Far%C4%B1m-oranlar%C4%B1n%C4%B1n-%C3%B6l%C3%A7%C3%BClmesi-derin-ara%C5%9Ft%C4%B1rma-4ac10f37e2e5" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:bg-green-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <span className="text-green-400 font-semibold text-sm">Architecture</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-green-300 transition-colors">
                Asenkron LLM Agent Mimarisi
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Ölçeklenebilir ve esnek yapay zeka asistanları
              </p>
              <a href="https://medium.com/@muhtalipdede/asenkron-llm-agent-mimarisi-%C3%B6l%C3%A7eklenebilir-ve-esnek-yapay-zeka-asistanlar%C4%B1-37b0053351ad" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20 hover:bg-yellow-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <span className="text-yellow-400 font-semibold text-sm">Memory Systems</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-yellow-300 transition-colors">
                AI Asistanları için Hafıza Yönetimi
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Kişiselleştirilmiş yapay zeka sistemlerinde memory mimarisi
              </p>
              <a href="https://medium.com/@muhtalipdede/ki%C5%9Fiselle%C5%9Ftirilmi%C5%9F-yapay-zeka-asistanlar%C4%B1-i%CC%87%C3%A7in-haf%C4%B1za-memory-y%C3%B6netimi-neden-%C3%B6nemlidir-4ff76a3b793e" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 hover:bg-red-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔗</span>
                <span className="text-red-400 font-semibold text-sm">Integration</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-red-300 transition-colors">
                MCP - Otonom AI Araçları Entegrasyonu
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Yapay zeka araçlarının iş süreçlerine entegrasyonu
              </p>
              <a href="https://medium.com/@muhtalipdede/mcp-otonom-yapay-zeka-ara%C3%A7lar%C4%B1-i%CC%87%C5%9F-s%C3%BCre%C3%A7lerine-nas%C4%B1l-entegre-edilir-20348b29cb0a" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤝</span>
                <span className="text-indigo-400 font-semibold text-sm">Microservices</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-indigo-300 transition-colors">
                CQRS vs API Composition
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Mikroservislerde hangisini ne zaman kullanmalı
              </p>
              <a href="https://medium.com/@muhtalipdede/cqrs-ve-api-composition-mikroservislerde-hangisini-ne-zaman-kullanmal%C4%B1-0968a857e560" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Additional Articles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-teal-500/20 hover:bg-teal-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="text-teal-400 font-semibold text-sm">Autonomous AI</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-teal-300 transition-colors">
                Otonom Yapay Zeka Agentları
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Agents - bağımsız karar alabilen AI sistemleri
              </p>
              <a href="https://medium.com/@muhtalipdede/agents-otonom-yapay-zeka-agentlar%C4%B1-080fc98a9e62" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-violet-500/20 hover:bg-violet-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📚</span>
                <span className="text-violet-400 font-semibold text-sm">RAG Systems</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-violet-300 transition-colors">
                RAG ile Güçlendirilmiş LLM
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Retrieval Augmented Generation sistemleri
              </p>
              <a href="https://medium.com/@muhtalipdede/rag-retrieval-augmented-generation-ile-g%C3%BC%C3%A7lendirilmi%C5%9F-llm-d519089fc080" 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm transition-colors">
                <span>Read on Medium</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="https://medium.com/@muhtalipdede" 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              <span>Follow on Medium</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Community & Languages */}
      <section className="relative py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-8">Community Leadership</h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">The Coderverse</h3>
                <p className="text-gray-300 mb-6">
                  Co-founder of a thriving software community hosting live broadcasts on YouTube, 
                  collaborating on open-source projects, and organizing tech events across multiple platforms.
                </p>
                <a href="https://thecoderverse.com" 
                   target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <span>Explore The Coderverse</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-8">Languages</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">Turkish</span>
                    <span className="text-blue-400">Native</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">English</span>
                    <span className="text-green-400">Professional</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Let&#39;s Build Something Amazing Together</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I&#39;m always excited to discuss new opportunities, innovative projects, and cutting-edge technologies. 
              Let&#39;s connect and create the future of software engineering.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <a href="mailto:muhtalipdede@gmail.com" 
                 className="group flex items-center gap-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Email Me</span>
              </a>
              
              <a href="https://linkedin.com/in/muhtalipdede" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-3 bg-blue-700/20 hover:bg-blue-700/30 border border-blue-600/30 text-blue-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a href="https://github.com/muhtalipdede" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-3 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 text-gray-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              <a href="https://thecoderverse.com" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <GlobeAltIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>The Coderverse</span>
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 text-sm">
                © 2026 Muhtalip Dede. Crafted with passion for technology and innovation.
              </p>
              <p className="text-gray-300 text-sm mt-4 max-w-4xl mx-auto italic leading-relaxed">
                &quot;Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand.&quot;
              </p>
              <p className="text-gray-500 text-xs mt-2">
                - Albert Einstein
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
