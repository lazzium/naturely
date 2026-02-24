import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: "/images/hero/hero_1.png",
    alt: "Innovation and Tech"
  },
  {
    image: "/images/hero/hero_2.png",
    alt: "Learning and Development"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white pt-[90px] px-4 md:px-8 pb-4 md:pb-8 flex flex-col">
      {/* Main Rounded Container */}
      <div className="relative flex-1 w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center">

        {/* Background Slider */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-[-5%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-medium text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg"
          >
            Libérez votre potentiel tech.<br />
            Tout au même endroit.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-light leading-relaxed drop-shadow-md"
          >
            Rejoignez l'expérience technologique ultime — où la passion rencontre la performance, et chaque ligne de code vous rapproche de l'innovation.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0f172a] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg flex items-center gap-2 group"
          >
            Commencer votre aventure
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row justify-between items-center gap-6 z-10">

          {/* Bottom Left: Trust / Pros */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row-reverse md:flex-row items-center gap-4 w-full md:w-auto justify-between md:justify-start"
          >
            <div className="text-white text-right md:text-left text-[11px] sm:text-sm font-medium leading-snug drop-shadow-md">
              Formez-vous avec des experts.<br className="hidden sm:block" />
              {" "}Obtenez de vrais résultats.
            </div>

            {/* Avatars Pill */}
            <div className="flex items-center bg-white/20 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/30 shadow-lg">
              <div className="flex -space-x-2 sm:-space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Pro 1" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Pro 2" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Pro 3" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 sm:gap-8 text-white text-[11px] sm:text-sm font-medium drop-shadow-md w-full md:w-auto justify-center md:justify-end"
          >
            <a href="#" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              Instagram <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              Facebook <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              LinkedIn <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

