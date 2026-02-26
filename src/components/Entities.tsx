import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const entities = [
    {
        name: "FUN HIGH TECH SARL",
        description: "Société de développement des solutions informatiques et domotiques. Nous sommes une société de services spécialisée dans le développement de solutions informatiques innovantes et sur mesure.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "FUN HIGH TECH COLLEGE ANTA",
        description: "Académie pour le Numérique et la Technologie en Afrique. Elle a pour mission de sensibiliser et de former enfants et adolescents aux compétences numériques fondamentales.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    },
    {
        name: "FUN HIGH TECH LYCÉE",
        description: "Ecole des sciences et technologies appliquées. Nous y formons la prochaine génération de leaders technologiques, en offrant un curriculum rigoureux axé sur les sciences, la technologie, l'ingénierie et les mathématiques (STEM).",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "FUN HIGH TECH CENTER",
        description: "Ecole professionnelle de Recherche et de Formation en Informatique pour les Innovations Technologiques en Afrique. Ici, nous préparons les jeunes et les professionnels à maîtriser les outils et les technologies les plus avancés.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Entities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === entities.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? entities.length - 1 : prevIndex - 1));
    };

    // Auto-play was removed as requested

    return (
        <section className="w-full bg-white pb-16">
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-20 pt-16 mb-10">
                    <div className="w-full flex items-center justify-between border-l-4 border-brand-orange pl-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight">Nos Entités</h2>
                            <p className="text-gray-500 text-sm mt-2">Découvrez les quatre piliers de notre structure technologique.</p>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden group">

                    {/* Images */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={entities[currentIndex].image}
                            alt={entities[currentIndex].name}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto px-6 md:px-8 lg:px-20">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8 w-full">

                            {/* Left Text Content */}
                            <div className="max-w-3xl">
                                <div className="inline-block bg-transparent text-white px-5 py-2 rounded-lg text-xs md:text-sm font-bold tracking-widest uppercase mb-4 border border-white/40">
                                    {entities[currentIndex].name}
                                </div>

                                <p className="text-white text-lg md:text-2xl font-light leading-relaxed mb-8">
                                    {entities[currentIndex].description}
                                </p>

                                <button className="btn-blue group/btn">
                                    En savoir plus
                                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </button>
                            </div>

                            {/* Right Navigation Controls */}
                            <div className="flex items-center gap-3 md:gap-4 pb-2">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-transparent border border-white/40 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-transparent border border-white/40 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress indicators (like original image) */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 hidden md:flex">
                        {entities.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
