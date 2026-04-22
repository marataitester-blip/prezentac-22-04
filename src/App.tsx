/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  Coins, 
  Map, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CircleDollarSign,
  ChevronRight,
  BookOpen,
  Ghost,
  Compass,
  LayoutDashboard,
  Play,
  Image as ImageIcon,
  History,
  FileText,
  Search,
  Download,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS, Language } from './translations';

// --- TYPES ---
type Tab = 'overview' | 'gallery' | 'characters' | 'economy' | 'demo' | 'roadmap';

// --- ASSETS ---
const CARD_BASE_URL = "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot@main/";
const MAJOR_ARCANA = [
  { id: "00", name: "Fool (Шут)", file: "00_fool" },
  { id: "01", name: "Magician (Маг)", file: "01_magician" },
  { id: "02", name: "High Priestess (Жрица)", file: "02_high_priestess" },
  { id: "03", name: "Empress (Императрица)", file: "03_empress" },
  { id: "04", name: "Emperor (Император)", file: "04_emperor" },
  { id: "10", name: "Wheel of Fortune (Колесо Фортуны)", file: "10_wheel_of_fortune" },
  { id: "13", name: "Death (Смерть)", file: "13_death" },
  { id: "16", name: "Tower (Башня)", file: "16_tower" },
  { id: "17", name: "Star (Звезда)", file: "17_star" },
  { id: "21", name: "World (Мир)", file: "21_world" },
  { id: "22", name: "Hero (Герой)", file: "22_hero" }
];

// --- DATA ---
// Handled by translations.

// --- NAVIGATION COMPONENT ---

// --- COMPONENTS ---

// Card and CardVisual are defined at the bottom.

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [selectedDemoChar, setSelectedDemoChar] = useState<LangCharKey>('messir');
  const [lang, setLang] = useState<Language>('ru');

  const t = TRANSLATIONS[lang];

  type LangCharKey = keyof typeof t.characters;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                <div className="bg-[#2a1e17] border border-gold/30 rounded-xl p-8 text-[#e5e1da] shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-bold mb-2 uppercase tracking-tight text-gold">{t.hero.title}</h2>
                    <p className="text-[#e5e1da]/80 mb-6 max-w-lg">{t.hero.desc}</p>
                    <div className="flex gap-3">
                      <button className="px-5 py-2.5 bg-gold text-[#120e0c] font-bold rounded-lg text-xs shadow-md transition-transform hover:scale-105 active:scale-95">
                        {t.hero.cta_pres}
                      </button>
                      <button className="px-5 py-2.5 bg-[#4a3a2e] text-gold border border-gold/50 font-bold rounded-lg text-xs transition-colors hover:bg-gold hover:text-[#120e0c]">
                        {t.hero.cta_tech}
                      </button>
                    </div>
                  </div>
                  <Play className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-gold/5 rotate-12" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="hover:border-gold/50 cursor-pointer bg-[#1e1612]">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-4">
                      <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold mb-2 text-gold font-serif text-lg">{t.overview.confed_title}</h3>
                    <p className="text-sm text-[#e5e1da]/60">{t.overview.confed_desc}</p>
                  </Card>
                  <Card className="hover:border-gold/50 cursor-pointer bg-[#1e1612]">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-4">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold mb-2 text-gold font-serif text-lg">{t.overview.multiagent_title}</h3>
                    <p className="text-sm text-[#e5e1da]/60">{t.overview.multiagent_desc}</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="h-full bg-[#1e1612] border-gold/20">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-gold uppercase tracking-wider">
                    <Zap className="w-4 h-4" /> {t.overview.status_title}
                  </h4>
                  <div className="space-y-6">
                    <div className="border-l-2 border-gold pl-3">
                      <p className="text-sm font-bold">{t.overview.messir_prod}</p>
                      <p className="text-xs text-[#e5e1da]/50">{t.overview.messir_status}</p>
                    </div>
                    <div className="border-l-2 border-[#4a3a2e] pl-3">
                      <p className="text-sm font-bold">{t.currency_system}</p>
                      <p className="text-xs text-[#e5e1da]/50">{t.overview.economy_status}</p>
                    </div>
                    <div className="border-l-2 border-gold/30 pl-3">
                      <p className="text-sm font-bold">{t.overview.tg_app}</p>
                      <p className="text-xs text-[#e5e1da]/50">{t.overview.tg_status}</p>
                    </div>
                  </div>
                  <button className="w-full mt-10 py-2.5 bg-gold text-[#120e0c] text-xs font-bold rounded-lg hover:bg-[#c5a059]/90 transition-colors uppercase tracking-widest">
                    {t.overview.gen_report}
                  </button>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold tracking-tight text-gold uppercase">{t.gallery_title}</h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase rounded border border-gold/20">{t.author_deck}</span>
              </div>
            </header>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {MAJOR_ARCANA.map(arcana => (
                <CardVisual 
                  key={arcana.id} 
                  fileName={arcana.file} 
                  title={arcana.name} 
                  isAnimated={true}
                />
              ))}
            </div>
          </motion.div>
        );

      case 'characters':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(t.characters) as LangCharKey[]).map(key => {
              const char = t.characters[key];
              return (
                <Card key={key} className="bg-[#1e1612] border-gold/20 hover:border-gold/50 group">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-6 border border-gold/20">
                     <Users className="w-6 h-6" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gold tracking-tight">{char.name}</h3>
                    <p className="text-[10px] font-bold text-[#e5e1da]/40 uppercase tracking-widest">{char.role}</p>
                  </div>
                  <p className="text-sm text-[#e5e1da]/70 leading-relaxed mb-6">{char.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {char.traits.map(trait => (
                      <span key={trait} className="px-2 py-1 text-[10px] bg-gold/5 text-gold font-bold uppercase rounded border border-gold/10">
                        {trait}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </motion.div>
        );

      case 'economy':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <Card className="bg-[#1e1612] border-gold/20">
              <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2 underline underline-offset-8 decoration-gold/50 decoration-2 text-gold uppercase">
                <Coins className="w-5 h-5" /> {t.currency_system}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(['gold', 'silver', 'copper'] as const).map(id => {
                  const c = t.economy[id];
                  const colorMap = {
                    gold: 'text-gold border-gold/30',
                    silver: 'text-slate-400 border-slate-400/30',
                    copper: 'text-orange-500 border-orange-500/30'
                  };
                  return (
                    <div key={id} className={`p-5 rounded-xl border bg-[#120e0c] ${colorMap[id]}`}>
                      <h4 className={`font-bold mb-2 uppercase text-xs tracking-widest`}>{c.name}</h4>
                      <p className="text-xs text-[#e5e1da]/60 leading-relaxed">{c.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {t.economy.rules.map((rule, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#120e0c] rounded-lg border border-gold/10 text-sm text-[#e5e1da]/80">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a1e17] rounded-xl p-6 text-[#e5e1da] border border-gold/20 shadow-lg">
                <h4 className="font-bold font-serif text-lg mb-2 text-gold">{t.economy_ru}</h4>
                <p className="text-xs text-[#e5e1da]/40 mb-4 tracking-wide font-mono">1 SILVER = 1 TELEGRAM STAR</p>
                <p className="text-xs text-[#e5e1da]/70 leading-relaxed">
                  {lang === 'ru' ? 'Интеграция с платежной системой Telegram Stars позволяет минимизировать барьеры при оплате для СНГ аудитории.' : 
                   lang === 'pl' ? 'Integracja z systemem płatności Telegram Stars pozwala zminimalizować bariery płatnicze dla odbiorców z WNP.' :
                   'Integration with Telegram Stars payment system minimizes payment barriers for CIS audiences.'}
                </p>
              </div>
              <div className="bg-[#4a3a2e] rounded-xl p-6 text-[#e5e1da] border border-gold/20 shadow-lg">
                 <h4 className="font-bold font-serif text-lg mb-2 text-gold">{t.economy_west}</h4>
                 <p className="text-xs text-[#e5e1da]/40 mb-4 tracking-wide font-mono">STRIPE / GOOGLE PAY / APPLE PAY</p>
                 <p className="text-xs text-[#e5e1da]/80 font-medium">
                   {lang === 'ru' ? 'Готовность юридической базы и эквайринга для масштабирования на западные рынки.' :
                    lang === 'pl' ? 'Gotowość bazy prawnej i akceptacji płatności do skalowania na rynkach zachodnich.' :
                    'Legal framework and acquiring readiness for scaling to Western markets.'}
                 </p>
              </div>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex justify-center items-start pt-4">
                <div className="w-64">
                   <CardVisual fileName="00_fool" isAnimated={true} title="Шут / Fool" />
                </div>
              </div>
              <div className="col-span-2">
                <Card className="min-h-[400px] bg-[#1e1612] flex flex-col p-0 overflow-hidden border-gold/30">
                  <div className="p-4 bg-[#2a1e17] border-b border-gold/20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-wider">{t.demo_visual}</span>
                    </div>
                    <div className="flex gap-1 p-1 bg-[#120e0c] rounded-lg border border-gold/20">
                      {(Object.keys(t.characters) as LangCharKey[]).map(key => (
                        <button 
                          key={key}
                          onClick={() => setSelectedDemoChar(key)}
                          className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${selectedDemoChar === key ? 'bg-gold text-[#120e0c] shadow-sm' : 'text-[#e5e1da]/40 hover:text-gold'}`}
                        >
                          {t.characters[key].name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col justify-center text-center bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={selectedDemoChar}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-6"
                      >
                         <p className={`text-2xl leading-relaxed font-serif text-[#e5e1da] italic`}>
                          {t.characters[selectedDemoChar].reading}
                        </p>
                        <div className="w-16 h-0.5 bg-gold mx-auto rounded-full" />
                        <div className="max-w-md mx-auto">
                           <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase rounded border border-gold/20">
                              {t.characters[selectedDemoChar].role}
                           </span>
                           <p className="mt-4 text-sm text-[#e5e1da]/50 leading-relaxed italic">
                             {t.characters[selectedDemoChar].meaning}
                           </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case 'roadmap':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                 {t.roadmap.map((item, i) => (
                   <div key={i} className="bg-[#1e1612] p-5 rounded-xl border border-gold/20 shadow-sm flex gap-4 hover:border-gold/40 transition-all">
                      <div className="w-10 h-10 bg-gold text-[#120e0c] rounded-lg flex items-center justify-center font-bold text-xs shrink-0">{i+1}</div>
                      <div>
                        <h4 className="text-xs font-bold text-gold uppercase tracking-widest mb-1">{item.phase}</h4>
                        <h3 className="font-bold text-[#e5e1da] font-serif text-lg mb-4">{item.goal}</h3>
                        <div className="w-full bg-[#120e0c] h-1 rounded-full border border-gold/10">
                          <div className="bg-gold h-1 rounded-full transition-all duration-1000" style={{ width: i === 0 ? '75%' : '0%' }}></div>
                        </div>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="space-y-6">
                <Card className="bg-[#2a1e17] text-[#e5e1da] border border-gold/30 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingUp className="w-24 h-24 text-gold" />
                  </div>
                  <h4 className="text-sm font-bold mb-6 flex items-center gap-2 text-gold uppercase tracking-widest relative z-10">
                    <TrendingUp className="w-4 h-4" /> {t.prediction_kpi}
                  </h4>
                  <div className="space-y-6 relative z-10">
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-[#e5e1da]/40 mb-2 uppercase tracking-widest">
                        <span>LTV / CAC Ratio</span>
                        <span className="text-gold">Target: 3.5x</span>
                      </div>
                      <div className="w-full bg-[#120e0c] h-1 rounded-full border border-gold/10">
                        <div className="bg-gold h-1 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-[#e5e1da]/40 mb-2 uppercase tracking-widest">
                        <span>Retention Month 1</span>
                        <span className="text-[#4a3a2e]">Target: 25%</span>
                      </div>
                      <div className="w-full bg-[#120e0c] h-1 rounded-full border border-gold/10">
                        <div className="bg-[#4a3a2e] h-1 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 p-4 bg-[#120e0c] rounded-lg border border-gold/20 shadow-inner">
                    <p className="text-xs text-gold/80 leading-relaxed italic text-center font-serif">{t.report_quote}</p>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#120e0c] overflow-hidden text-[#e5e1da]">
      {/* Sidebar */}
      <aside className="w-80 bg-[#1e1612] border-r border-gold/20 flex flex-col shrink-0 shadow-2xl z-20">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="w-10 h-10 bg-gold rounded flex items-center justify-center text-[#120e0c] font-black text-lg transition-transform group-hover:scale-110">13</div>
            <div>
              <h1 className="font-serif font-black text-2xl tracking-tighter text-gold leading-none">{t.title}</h1>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#e5e1da]/30 mt-1">Status: Executive</p>
            </div>
          </div>

          <nav className="space-y-1">
            <div className="text-[10px] font-bold text-[#e5e1da]/20 uppercase tracking-[0.3em] mb-4 px-3">Vision Core</div>
            <NavBtn active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<LayoutDashboard size={18}/>} label={t.nav.overview} />
            <NavBtn active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={<ImageIcon size={18}/>} label={t.nav.gallery} />
            <NavBtn active={activeTab === 'characters'} onClick={() => setActiveTab('characters')} icon={<Users size={18}/>} label={t.nav.characters} />
            <NavBtn active={activeTab === 'economy'} onClick={() => setActiveTab('economy')} icon={<Coins size={18}/>} label={t.nav.economy} />
            <NavBtn active={activeTab === 'demo'} onClick={() => setActiveTab('demo')} icon={<MessageSquare size={18}/>} label={t.nav.demo} />
            <NavBtn active={activeTab === 'roadmap'} onClick={() => setActiveTab('roadmap')} icon={<Compass size={18}/>} label={t.nav.roadmap} />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gold/10">
           <div className="bg-[#120e0c] rounded-xl p-4 border border-gold/5 shadow-inner">
             <div className="text-[10px] font-bold text-[#e5e1da]/30 mb-2 uppercase tracking-[0.15em]">System Vitality</div>
             <div className="w-full bg-[#2a1e17] h-1 rounded-full mb-3 overflow-hidden">
                <div className="bg-gold h-1 rounded-full w-3/4 shadow-[0_0_8px_rgba(197,160,89,0.5)]"></div>
             </div>
             <div className="text-[10px] font-bold text-gold/60 uppercase tracking-widest flex justify-between">
                <span>75% Processed</span>
                <span className="animate-pulse">Active</span>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 bg-[#1e1612]/80 backdrop-blur-md border-b border-gold/10 flex items-center justify-between px-10 shrink-0 z-10 transition-all">
          <div className="flex items-center gap-6 w-1/3">
            <div className="relative w-full group">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#e5e1da]/30 group-focus-within:text-gold transition-colors">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 bg-[#120e0c]/50 border border-gold/10 rounded-lg text-sm text-[#e5e1da] focus:ring-1 focus:ring-gold focus:bg-[#120e0c] outline-none transition-all placeholder:text-[#e5e1da]/20" 
                placeholder="Search database..." 
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex bg-[#120e0c] p-1 rounded-lg border border-gold/10">
              {(Object.keys(TRANSLATIONS) as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-[10px] font-bold rounded transition-all uppercase tracking-widest ${lang === l ? 'bg-gold text-[#120e0c] shadow-lg' : 'text-[#e5e1da]/40 hover:text-gold'}`}
                >
                  {t.languages[l]}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-gold/10" />

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[10px] font-bold border border-gold/20 rounded-lg bg-transparent text-gold hover:bg-gold/5 transition-all uppercase tracking-[0.2em] flex items-center gap-2">
                <Download className="w-3.5 h-3.5" /> PDF
              </button>
              <button className="px-6 py-2 text-[10px] font-bold text-[#120e0c] bg-gold rounded-lg hover:bg-[#c5a059]/90 transition-all uppercase tracking-[0.2em] shadow-lg shadow-gold/10 active:scale-95">
                New Entry
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 scroll-smooth no-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          <div className="max-w-6xl mx-auto">
             <div className="mb-10 opacity-40">
               <div className="text-[10px] uppercase font-bold tracking-[0.5em] text-gold border-b border-gold/20 pb-2 mb-2 inline-block">Living Tarot / System / Alpha V.1</div>
             </div>
             {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

// --- UTILS ---

function NavBtn({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all group
        ${active ? 'bg-gold text-[#120e0c] shadow-lg translate-x-2' : 'text-[#e5e1da]/60 hover:bg-gold/10 hover:text-gold'}
      `}
    >
      <span className={`transition-colors ${active ? 'text-[#120e0c]' : 'text-gold/40 group-hover:text-gold'}`}>
        {icon}
      </span>
      {label}
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#120e0c]" />}
    </button>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-[#1e1612] border border-gold/10 rounded-xl p-6 transition-all duration-300 relative overflow-hidden group ${className}`}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full -mr-12 -mt-12 transition-colors group-hover:bg-gold/10" />
      {children}
    </div>
  );
}

function CardVisual({ fileName, title, isAnimated = false }: { fileName: string, title?: string, isAnimated?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  const videoSrc = `${CARD_BASE_URL}${fileName}_anim.mp4`;
  const imgSrc = `${CARD_BASE_URL}${fileName}.png`;

  return (
    <div className="group relative aspect-[2/3.5] rounded-xl overflow-hidden border border-gold/30 shadow-2xl bg-[#120e0c] transition-all hover:border-gold/60 hover:shadow-gold/10">
      {isAnimated && !error ? (
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => {
            setError(true);
            // Fallback to static image if video fails
          }}
        />
      ) : null}
      
      {(!isAnimated || error) && (
        <img 
          src={imgSrc} 
          alt={title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded || error ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1e1612]">
          <Zap className="w-6 h-6 text-gold animate-pulse shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
        </div>
      )}

      {error && !isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1e1612] p-4 text-center">
          <ImageIcon className="w-8 h-8 text-gold/20 mb-2" />
          <p className="text-[10px] text-gold/40 uppercase tracking-tighter">Asset Missing</p>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#120e0c] via-transparent to-transparent opacity-60 pointer-events-none" />
      
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
          <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] text-center drop-shadow-md">{title}</p>
        </div>
      )}
    </div>
  );
}

