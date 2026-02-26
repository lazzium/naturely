import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function LyceeHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#faf7fa]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center max-w-2xl"
                    >


                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.1] text-brand-blue tracking-tight mb-8">
                            <span className="text-brand-blue/80">FUN HIGH TECH SCHOOL — </span>
                            l'avenir commence ici
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl font-medium leading-[1.6]">
                            Bienvenue à l'école des sciences et technologies appliquées. Une éducation de qualité combinant théorie et pratique pour préparer les innovateurs de demain.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold text-base transition-colors shadow-xl shadow-brand-blue/20">
                                S'inscrire pour la rentrée
                            </button>
                            <button className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 px-8 py-4 rounded-full font-bold text-base transition-colors">
                                Voir les filières
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Content - Image Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-[500px] lg:h-[700px] flex justify-end items-center"
                    >
                        {/* The image container */}
                        <div className="relative w-full h-full lg:w-[90%] rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                alt="Students collaborating"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Dark overlay for contrast if needed, optional */}
                            <div className="absolute inset-0 bg-black/5" />
                        </div>

                        {/* Overlay graphics overlapping the image and container */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-10">
                            <svg viewBox="0 0 600 800" className="w-[120%] h-[120%] lg:w-[140%] lg:h-[140%] absolute left-10 lg:-left-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Huge tilted oval stroke */}
                                <ellipse
                                    cx="300"
                                    cy="400"
                                    rx="160"
                                    ry="360"
                                    transform="rotate(25 300 400)"
                                    stroke="white"
                                    strokeWidth="24"
                                />
                                {/* Center Star / Sparkle made with cubic/quadratic curves */}
                                <path
                                    d="M 300 280 Q 300 380 400 380 Q 300 380 300 480 Q 300 380 200 380 Q 300 380 300 280 Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
