import { motion } from 'motion/react';
import { Server } from 'lucide-react';
import { useState } from 'react';

export default function About() {
    const [innovationMode, setInnovationMode] = useState(true);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

                {/* Top Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24">
                    <div className="w-full flex items-center border-l-4 border-brand-orange pl-6">
                        <div className="border border-gray-200 rounded-full px-4 py-2 text-xs md:text-sm font-medium text-gray-800 shrink-0 capitalize w-max">
                            À propos de FUN HIGH TECH
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed max-w-4xl">
                        Chez FUN HIGH TECH, nous ne faisons pas que parler de technologie — <span className="text-gray-500">nous la créons.</span> Depuis notre fondation, notre structure est devenue un foyer pour les esprits innovants, des étudiants curieux aux experts chevronnés.
                    </p>
                </div>

                {/* Middle Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Dark Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0f172a] text-white p-8 md:p-10 flex flex-col justify-between min-h-[380px] md:min-h-[420px] rounded-3xl"
                    >
                        <div>
                            <Server className="w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8 text-white/90" />
                            <p className="text-xl md:text-2xl font-light leading-snug">
                                Des infrastructures réseau avec serveurs dédiés de niveau professionnel — <span className="text-gray-400">innovez dans des conditions parfaites, en toute saison.</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-8 md:mt-12">
                            <button
                                onClick={() => setInnovationMode(!innovationMode)}
                                className="flex items-center justify-center cursor-pointer transition-colors duration-300"
                            >
                                {innovationMode ? (
                                    <div className="w-12 md:w-14 h-6 md:h-7 bg-brand-blue relative flex items-center p-1 rounded-full">
                                        <div className="w-4 md:w-5 h-4 md:h-5 bg-white absolute right-1 rounded-full"></div>
                                    </div>
                                ) : (
                                    <div className="w-12 md:w-14 h-6 md:h-7 bg-gray-600 relative flex items-center p-1 rounded-full">
                                        <div className="w-4 md:w-5 h-4 md:h-5 bg-white absolute left-1 rounded-full"></div>
                                    </div>
                                )}
                            </button>
                            <span className="text-xs md:text-sm font-medium text-gray-400">Mode Innovation</span>
                        </div>
                    </motion.div>

                    {/* Image Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="relative min-h-[300px] md:min-h-[420px] overflow-hidden group bg-brand-blue rounded-3xl"
                    >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipe travaillant"
                                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3 text-sm font-medium tracking-wide text-center rounded-full">
                                Formations & Incubations
                            </div>
                        </div>
                    </motion.div>

                    {/* Light Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-100 p-8 md:p-10 flex flex-col min-h-[380px] md:min-h-[420px] rounded-3xl"
                    >
                        <h3 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-2 tracking-tight">100+</h3>
                        <p className="text-sm font-medium text-gray-800 mb-4">Experts & Mentors</p>
                        <p className="text-sm text-gray-500 mb-8 md:mb-12 leading-relaxed">
                            Des professionnels certifiés prêts à booster vos compétences, du premier code à la réussite de votre projet final.
                        </p>

                        <div className="flex flex-col gap-4 mt-auto">
                            {[
                                { label: 'Débutant', score: 10, min: 55 },
                                { label: 'Intermédiaire', score: 9, min: 40 },
                                { label: 'Avancé', score: 7, min: 35 }
                            ].map((level) => (
                                <div key={level.label} className="flex items-center justify-between gap-3 md:gap-4">
                                    <span className="text-[10px] md:text-xs text-gray-500 w-20 md:w-24 uppercase tracking-wider">{level.label}</span>
                                    <div className="flex gap-[2px] md:gap-[3px] flex-1">
                                        {[...Array(10)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-2 md:h-2.5 w-full max-w-[12px] rounded-sm ${i < level.score ? 'bg-[#38bdf8]' : 'bg-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-900">{level.min}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Numbers */}
                <div className="pt-8 flex flex-col items-center gap-8 md:gap-12 mt-4 md:mt-8">
                    <h2 className="text-lg md:text-2xl text-gray-700 font-medium text-center">Quelques faits supplémentaires sur nous en chiffres</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200">
                        <div className="flex flex-col items-center justify-center text-center px-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tighter">150</span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">APPRENANTS</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center px-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tighter">6</span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">PARTENAIRES</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center px-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tighter">10</span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">PROJETS</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center px-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tighter">3</span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">STARTUPS</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
