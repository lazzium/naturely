import { motion } from 'motion/react';

export default function LyceeMethods() {
    return (
        <section className="bg-brand-blue py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 text-white">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

                    {/* Left Icon Wrap */}
                    <div className="flex-shrink-0 relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                        {/* SVG Atom/Orbit Graphic */}
                        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Orbits */}
                            <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(-30 100 100)" stroke="white" strokeWidth="4" className="opacity-80" />
                            <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)" stroke="white" strokeWidth="4" className="opacity-80" />
                            <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(90 100 100)" stroke="white" strokeWidth="4" className="opacity-80" />

                            {/* Central Sparkle */}
                            <path
                                d="M 100 70 Q 100 100 130 100 Q 100 100 100 130 Q 100 100 70 100 Q 100 100 100 70 Z"
                                fill="white"
                            />
                        </svg>
                    </div>

                    {/* Right Headline */}
                    <div className="flex-grow max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2]">
                            Une pédagogie active privilégiant l'immersion en{" "}
                            <span className="underline decoration-white/60 underline-offset-8 decoration-2 italic text-brand-orange">mode projet</span>{" "}
                            dès le début de la formation.
                        </h2>
                    </div>
                </div>

                {/* Stats / Key points Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-12">
                    {/* Point 1 */}
                    <div className="md:px-8 border-l-0 md:border-l border-white/30 first:border-l-0 flex flex-col gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-brand-orange">100%</div>
                        <p className="text-white/80 text-sm sm:text-base font-medium max-w-[250px] leading-relaxed">
                            Pratique & Immersion. Des études de cas et simulations réelles.
                        </p>
                    </div>

                    {/* Point 2 */}
                    <div className="md:px-8 border-l-0 md:border-l border-white/30 flex flex-col gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-brand-orange">Expert</div>
                        <p className="text-white/80 text-sm sm:text-base font-medium max-w-[250px] leading-relaxed">
                            Enseignements dispensés par des professionnels du secteur.
                        </p>
                    </div>

                    {/* Point 3 */}
                    <div className="md:px-8 border-l-0 md:border-l border-white/30 flex flex-col gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-brand-orange">Top</div>
                        <p className="text-white/80 text-sm sm:text-base font-medium max-w-[250px] leading-relaxed">
                            Infrastructure & plate-formes technologiques de pointe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
