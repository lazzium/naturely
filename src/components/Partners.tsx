import { motion } from 'motion/react';

const partners = [
    {
        name: "RAB Tech",
        logo: "/images/partners/rab.png",
        url: "https://rab-tech.com/"
    },
    {
        name: "YoupiLab",
        logo: "/images/partners/youpilab.png",
        url: "https://youpilab.com/"
    },
    {
        name: "LinerGroup",
        logo: "/images/partners/linergroup.png",
        url: "https://linergroup.bj/"
    },
    {
        name: "Agreco",
        logo: "/images/partners/agreco.jpeg",
        url: "https://www.agreco.be/",
        scaleClass: "scale-90 md:scale-95 group-hover:scale-100 md:group-hover:scale-105"
    }
];

export default function Partners() {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 px-4">
                        Partenaires Stratégiques
                    </h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => window.open(partner.url, '_blank')}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            <div className="w-40 md:w-48 h-20 md:h-24 flex items-center justify-center p-2 border border-gray-100 transition-all duration-500 group-hover:border-brand-blue/30 group-hover:shadow-xl group-hover:shadow-brand-blue/5 bg-white relative overflow-hidden rounded-2xl">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={`w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 transform ${partner.scaleClass || "scale-125 md:scale-[1.35] group-hover:scale-[1.35] md:group-hover:scale-[1.45]"}`}
                                />
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue/10 transition-all duration-500 rounded-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

