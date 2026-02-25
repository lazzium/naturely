import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
    name: string;
    role: string;
    image: string;
    waves: number[];
    audioSrc?: string;
    key?: string | number;
}

function TestimonialCard({ name, role, image, waves, audioSrc }: TestimonialCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Contrôle via l'élément audio s'il est présent
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            if (audio.duration) {
                setProgress(audio.currentTime / audio.duration);
            }
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        const handlePlay = () => {
            setIsPlaying(true);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
        };
    }, []);

    // Fallback fictif si aucun fichier audio n'est fourni
    useEffect(() => {
        if (audioSrc) return;

        let interval: ReturnType<typeof setInterval>;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    const nextProgress = prev + (1 / waves.length);
                    if (nextProgress >= 1) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return nextProgress;
                });
            }, 500); // 500ms par section d'onde
        }
        return () => clearInterval(interval);
    }, [isPlaying, waves.length, audioSrc]);

    const togglePlay = () => {
        if (audioSrc && audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        } else {
            if (!isPlaying && progress >= 0.99) {
                setProgress(0);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-3 flex flex-col gap-4 transition-all duration-300 shadow-md border border-gray-100/50"
        >
            {/* Image */}
            <div className="relative w-full aspect-[4/4.5] rounded-[2rem] overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="px-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h4 className="text-gray-900 font-semibold text-lg md:text-xl tracking-tight leading-none">{name}</h4>
                    {/* Check badge */}
                    <div className="relative flex items-center justify-center w-5 h-5 text-brand-orange">
                        {/* Verified badge SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.25 14.25L6.5 12l1.41-1.41L10.75 13.43l6.59-6.59L18.75 8.25l-8 8z" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-1 pr-4">
                    {role}
                </p>

                {/* Audio Player (hidden, logic only) */}
                {audioSrc && <audio ref={audioRef} src={audioSrc} preload="metadata" />}

                <div className="pb-3 pt-2 flex items-center gap-4">
                    <button
                        onClick={togglePlay}
                        className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-1" />}
                    </button>

                    {/* Generative Waveform */}
                    <div className="flex-1 flex items-center gap-[3px] md:gap-1 h-8 cursor-pointer" onClick={(e) => {
                        // Optionnel: permettre de cliquer sur l'onde pour changer la progression
                        if (audioSrc && audioRef.current) {
                            const bounds = e.currentTarget.getBoundingClientRect();
                            const clickPos = e.clientX - bounds.left;
                            const newProgress = clickPos / bounds.width;
                            audioRef.current.currentTime = audioRef.current.duration * newProgress;
                        }
                    }}>
                        {waves.map((height, i) => {
                            const isActive = (i / waves.length) <= progress;
                            return (
                                <div
                                    key={i}
                                    style={{ height: `${height}%` }}
                                    className={`flex-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-brand-blue' : 'bg-gray-300'}`}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

const testimonialsData = [
    {
        name: "Sophie Bennett",
        role: "Etudiante en formation Développement web et mobile",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        waves: [30, 50, 40, 70, 60, 90, 70, 50, 80, 100, 70, 40, 60, 50, 90, 60, 40, 30],
        audioSrc: "/audio/temoignage%201.ogg"
    },
    {
        name: "Alex Martinez",
        role: "Fonctionnaire en formation pratique en conception logiciel",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        waves: [40, 60, 50, 40, 80, 70, 50, 90, 60, 70, 100, 80, 50, 60, 40, 70, 50, 40]
    },
    {
        name: "Emma Wilson",
        role: "Eleve en Troisième Année d'electronique Appliquée au Lycée",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        waves: [20, 40, 60, 50, 70, 80, 60, 50, 70, 90, 80, 60, 40, 70, 90, 60, 40, 20]
    },
    {
        name: "David Chen",
        role: "Etudiant en Graphisme au Centre Fun Hight tech",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        waves: [50, 70, 40, 60, 80, 50, 30, 80, 70, 40, 60, 90, 100, 70, 50, 70, 50, 30]
    }
];

export default function Testimonials() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16 w-full flex items-center justify-between border-l-4 border-brand-orange pl-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight">Témoignages</h2>
                        <p className="text-gray-500 text-sm mt-2">Découvrez ce que disent nos collaborateurs et apprenants.</p>
                    </div>
                </div>

                {/* Grid of Testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-4">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
