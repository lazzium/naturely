import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, BookOpen, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

const contentData = [
    {
        id: "mission",
        title: "Notre Mission",
        pill: "L'Essentiel",
        tags: ["Dev. Numérique", "Solutions Époque", "Professionnalisme", "Impact"],
        icon: Target,
        rightContent: () => (
            <>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Mission bg" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0" />
                <div className="relative z-10 flex flex-col h-full justify-center text-white max-w-5xl mx-auto w-full">
                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-8 w-max shadow-sm border border-white/20">Fondation</div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-10 leading-tight">
                        Bâtir l'avenir <span className="font-semibold text-brand-orange">technologique</span> de l'Afrique.
                    </h2>
                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                        <div className="flex items-start gap-5 bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 h-full">
                            <div className="bg-brand-orange/20 p-3.5 rounded-2xl text-brand-orange shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Développement & Solutions</h4>
                                <p className="text-white/80 text-base leading-relaxed">
                                    Contribuer au développement numérique et technologique de l'Afrique en créant des solutions innovantes aux préoccupations majeures de notre ère.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 h-full">
                            <div className="bg-white/20 p-3.5 rounded-2xl text-white shrink-0">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Formation d'Excellence</h4>
                                <p className="text-white/80 text-base leading-relaxed">
                                    Former des professionnels qualifiés et capables de contribuer activement au développement de leur communauté à travers la technologie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    },
    {
        id: "vision",
        title: "Notre Vision",
        pill: "Perspective",
        tags: ["Leadership", "Création", "Innovation", "Afrique"],
        icon: Lightbulb,
        rightContent: () => (
            <>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Vision bg" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0" />
                <div className="relative z-10 flex flex-col h-full justify-center items-center w-full max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-10 shadow-sm border border-white/20">Ambition</div>
                    <div className="relative p-10 lg:p-14 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl overflow-hidden group w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity group-hover:opacity-50"></div>
                        <span className="absolute -top-6 -left-4 text-8xl text-white/10 font-serif leading-none">"</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-relaxed italic relative z-10 text-center">
                            Être la plus grande structure de <span className="text-white font-bold drop-shadow-md">Création</span> et d'<span className="text-brand-orange font-bold drop-shadow-md">Innovation Numérique</span> et Technologique en Afrique.
                        </h2>
                        <span className="absolute -bottom-16 -right-4 text-8xl text-white/10 font-serif leading-none">"</span>
                    </div>
                </div>
            </>
        )
    },

    {
        id: "formations",
        title: "Formations",
        pill: "Expertise",
        tags: ["Dev Web", "I.A.", "IoT", "Embarqué", "Multimédia"],
        icon: BookOpen,
        rightContent: () => (
            <>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" alt="Formations bg" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0" />
                <div className="relative z-10 flex flex-col h-full pr-2">
                    <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4 w-max shrink-0 border border-white/20">Programmes</div>
                    <h2 className="text-2xl md:text-4xl font-light text-white mb-6 shrink-0 tracking-tight">
                        Des parcours conçus pour <span className="font-semibold text-brand-orange">innover.</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full overflow-hidden">
                        {/* Column 1: School & Center */}
                        <div className="flex flex-col gap-5">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden flex-1 flex flex-col hover:bg-white/10 transition-colors">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue" />
                                <h3 className="text-base font-bold text-white mb-4">FUN HIGH TECH SCHOOL</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> <span className="leading-snug">Production Multimédia</span></li>
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> <span className="leading-snug">Electronique Appliquée</span></li>
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> <span className="leading-snug">Systèmes Informatiques et Développement Web et Mobile</span></li>
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden flex-1 flex flex-col hover:bg-white/10 transition-colors">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange" />
                                <h3 className="text-base font-bold text-white mb-4">FUN HIGH TECH CENTER</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" /> <span className="leading-snug">Développement Logiciel et Systèmes d’Intelligence Artificielle</span></li>
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" /> <span className="leading-snug">Développement Multimédia</span></li>
                                    <li className="flex items-start gap-3 text-xs text-white/80"><CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" /> <span className="leading-snug">Systèmes Embarqués et Internet des Objets</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Pro & Others */}
                        <div className="flex flex-col gap-5">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex-1 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-white/40" />
                                <h4 className="font-bold text-white mb-4 text-base uppercase tracking-wide">Pro & Management</h4>
                                <p className="text-xs text-white/80 leading-relaxed font-medium capitalize">Formation à destination de directeurs informatiques, chefs de projet, architectes techniques, analystes programmeurs</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 flex-1">
                                <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 flex flex-col justify-center">
                                    <h4 className="font-bold text-white mb-2 text-sm uppercase text-brand-blue">PyPro</h4>
                                    <p className="text-[11px] text-white/60 leading-tight">Expertise Python & IA pour étudiants</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 flex flex-col justify-center">
                                    <h4 className="font-bold text-white mb-2 text-sm uppercase text-brand-blue">Vacances</h4>
                                    <p className="text-[11px] text-white/60 leading-tight">Immersion tech intensive intensive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
];

export default function Discover() {
    const [activeTab, setActiveTab] = useState(contentData[0].id);

    return (
        <section className="w-full relative py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-brand-blue text-white">
            {/* Global Background Img / Elements */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                    alt="Background Pattern"
                    className="w-full h-full object-cover mix-blend-overlay opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
                <div className="w-full flex items-center justify-between border-l-4 border-brand-orange pl-6">
                    <div className="text-left max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight">Découvrir <span className="font-semibold">FUN HIGH TECH</span></h2>
                        <p className="text-white/80 mt-4 leading-relaxed font-medium">Plongez au cœur de notre identité, de nos objectifs et de nos parcours de formation exceptionnels.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 lg:gap-10">

                    {/* Top: Selectable Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {contentData.map((item) => {
                            const isActive = activeTab === item.id;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => setActiveTab(item.id)}
                                    className={`cursor-pointer overflow-hidden transition-all duration-300 backdrop-blur-md border ${isActive ? 'bg-white text-brand-blue rounded-3xl p-6 shadow-2xl border-white scale-[1.02]' : 'bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-2xl p-4 sm:p-5'}`}
                                >
                                    {isActive ? (
                                        <div className="flex flex-col h-full gap-2">
                                            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-semibold uppercase tracking-wider w-max mb-3">
                                                {item.pill}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-brand-blue">{item.title}</h3>

                                            <div className="flex flex-wrap gap-2 mb-6 hidden md:flex">
                                                {item.tags.map((tag, i) => (
                                                    <span key={i} className="px-3 py-1.5 border border-brand-blue/20 bg-brand-blue/5 rounded-full text-[11px] text-brand-blue font-medium whitespace-nowrap">
                                                        ♦ {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col h-full justify-between gap-4">
                                            <h3 className="text-xl md:text-2xl font-medium ml-2 drop-shadow-sm">{item.title}</h3>
                                            <button className="btn-standard self-start bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm mt-auto">
                                                Voir détails
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom: Content Details Full Width */}
                    <div className="w-full">
                        <div className="bg-white/10 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 h-[600px] lg:h-[700px] xl:h-[720px] border border-white/20 flex flex-col relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)] ring-1 ring-white/10 transition-all duration-500">
                            <AnimatePresence mode="wait">
                                {contentData.map((item) => (
                                    item.id === activeTab && (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full w-full absolute inset-0 p-6 sm:p-10 md:p-12 overflow-hidden flex flex-col"
                                        >
                                            <item.rightContent />
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
