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
      <div className="relative flex-1 w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center">

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-[1.15] tracking-tight drop-shadow-lg"
          >
            Ne subissez plus l'évolution technologique. Créez-la.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-2xl font-light leading-relaxed drop-shadow-md"
          >
            Bienvenue chez FUN HIGH TECH, votre partenaire de confiance en solutions informatiques et domotiques de pointe.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 sm:px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg flex items-center gap-2 group"
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
            className="hidden sm:flex flex-row-reverse md:flex-row items-center gap-4 w-full md:w-auto justify-between md:justify-start"
          >
            <div className="text-white text-right md:text-left text-[11px] sm:text-sm font-medium leading-snug drop-shadow-md">
              Formez-vous avec des experts.<br className="hidden sm:block" />
              {" "}Obtenez de vrais résultats.
            </div>
          </motion.div>

          {/* Bottom Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-5 sm:gap-8 text-white text-[11px] sm:text-sm font-medium drop-shadow-md w-full md:w-auto justify-center md:justify-end"
          >
            <a href="#" className="group/link flex items-center gap-1 hover:text-white/70 transition-colors">
              Facebook <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="group/link flex items-center gap-1 hover:text-white/70 transition-colors">
              TikTok <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="group/link flex items-center gap-1 hover:text-white/70 transition-colors">
              YouTube <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

