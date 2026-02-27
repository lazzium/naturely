import { motion } from 'motion/react';
import { Lightbulb, Terminal, Briefcase, ArrowRight } from 'lucide-react';

export default function LyceeHero() {
    return (
        <section className="bg-white overflow-hidden">
            {/* Top Dark Section */}
            <div className="relative bg-brand-blue flex flex-col lg:flex-row pt-16 lg:pt-24">
                {/* Left Content */}
                <div className="w-full lg:w-[55%] px-6 lg:px-20 py-16 lg:py-24 flex flex-col justify-center relative z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black leading-[1.2] text-white mb-6 uppercase">
                        FUN HIGH TECH SCHOOL —<br />
                        <span className="text-white normal-case font-bold">L'avenir commence <span className="text-brand-orange">ici</span></span>
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl font-medium max-w-lg mb-10 leading-relaxed">
                        Bienvenue à l'école des sciences et technologies appliquées. Une éducation de qualité combinant théorie et pratique pour préparer les innovateurs de demain.
                    </p>

                    <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-orange/20 flex items-center gap-2 uppercase tracking-wide">
                            S'inscrire pour la rentrée <ArrowRight size={18} />
                        </button>
                        <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full font-bold text-sm transition-colors flex items-center gap-2 uppercase tracking-wide group flex-shrink-0">
                            <span className="relative z-10 flex items-center gap-2">
                                Voir les filières <span className="group-hover:translate-x-1 transition-transform"><ArrowRight size={18} /></span>
                            </span>
                        </button>
                    </div>

                    {/* Decorative radial gradient behind text */}
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/50 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>
                </div>

                {/* Right Image Container */}
                <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative">
                    {/* The orange stroke/shape overlapping */}
                    <svg className="hidden lg:block absolute inset-y-0 left-0 h-full w-[150px] z-20 -translate-x-1" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                        {/* Solid fill for dark blue left side */}
                        <path d="M0,0 L30,0 C60,20 100,50 30,50 C-20,50 60,80 30,100 L0,100 Z" className="text-brand-blue" />
                        {/* Orange line */}
                        <path d="M30,0 C60,20 100,50 30,50 C-20,50 60,80 30,100" fill="none" stroke="#f39200" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                        alt="Étudiants collaborant sur un projet"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Bottom Light Section */}
            <div className="bg-[#f8fafc] py-16 lg:py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">

                        {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="text-brand-orange mt-1 shrink-0">
                                <Lightbulb size={40} className="stroke-[1.5]" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-brand-blue text-xl font-extrabold leading-tight">Apprentissage par projet</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                    Nous privilégeons une approche éducative immersive, mettant les apprenants au cœur d'activités concrètes.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="text-brand-blue mt-1 shrink-0">
                                <Terminal size={40} className="stroke-[1.5]" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-brand-blue text-xl font-extrabold leading-tight">Coding Clinic</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                    Conçues en collaboration avec des entreprises partenaires, elles offrent une opportunité pratique d'application des compétences de nos apprenants.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="text-brand-orange mt-1 shrink-0">
                                <Briefcase size={40} className="stroke-[1.5]" />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-brand-blue text-xl font-extrabold leading-tight">Stages et projets pratiques</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                                    Faciliter des stages en entreprise, des projets pratiques en collaboration avec l'industrie et des ateliers pour permettre d'acquérir une expérience concrète et de développer des compétences pratiques.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Decorative right-side zigzag */}
                <svg className="absolute right-0 bottom-0 w-16 h-40 text-brand-blue opacity-10 z-0 pointer-events-none" viewBox="0 0 40 100" fill="none">
                    <path d="M20,0 L35,10 L20,20 L35,30 L20,40 L35,50 L20,60 L35,70 L20,80 L35,90 L20,100" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}
