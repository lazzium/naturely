import { motion } from 'motion/react';
import { Laptop, Cpu, MonitorPlay } from 'lucide-react';

const filieres = [
    {
        title: "Systèmes Informatiques et Développement \nWeb et Mobile",
        desc: "Offre une formation pratique et spécialisée dans les domaines de l'informatique et du développement d'applications, préparant les apprenants à des carrières prometteuses dans le secteur des technologies de l'information et de la communication.",
        icon: Laptop,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
        badge: "portfolio",
        rating: 4.8
    },
    {
        title: "Electronique\nAppliquée",
        desc: "Formons les apprenants à concevoir, analyser et mettre en œuvre des systèmes électroniques complexes. En combinant théorie et pratique, elle prépare les futurs professionnels à relever les défis de l'innovation technologique dans divers domaines industriels.",
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        badge: "portfolio",
        rating: 4.7
    },
    {
        title: "Production\nMultimédia",
        desc: "Cette filière offre une formation complète dans la création de contenus multimédias innovants, combinant compétences artistiques et techniques. Les apprenants y apprennent à concevoir des éléments visuels attrayants et interactifs, ainsi qu'à maîtriser les outils numériques essentiels à leur métier.",
        icon: MonitorPlay,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
        badge: "portfolio",
        rating: 4.9
    }
];

export default function LyceeFilieres() {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="bg-[#f4f7fb] rounded-[3rem] p-8 sm:p-12 lg:p-20 relative">

                    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#111827] mb-6">Nos filières</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Notre centre de formation professionnelle offre des filières spécialisées qui allient théorie et pratique, préparant ainsi nos étudiants à exceller dans des domaines en constante évolution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {filieres.map((filiere, idx) => {
                            const Icon = filiere.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
                                >
                                    {/* Image Card Top */}
                                    <div className="h-44 relative overflow-hidden group">
                                        {/* Colorful Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${idx === 0 ? 'from-blue-500/80 to-teal-400/80' : idx === 1 ? 'from-orange-500/80 to-amber-400/80' : 'from-indigo-600/80 to-purple-500/80'} mix-blend-multiply z-10 opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                                        <img src={filiere.image} alt={filiere.title.replace('\n', ' ')} className="absolute inset-0 w-full h-full object-cover" />

                                        {/* Badge / Top Elements */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-[#2563eb] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                                <Icon size={12} /> {filiere.badge}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content Bottom */}
                                    <div className="p-8 flex-grow flex flex-col pt-10 relative">
                                        <div className="absolute -top-7 left-8 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 z-30">
                                            <Icon className={idx === 0 ? "text-blue-500" : idx === 1 ? "text-orange-500" : "text-indigo-500"} size={26} />
                                        </div>

                                        <h3 className="text-[22px] font-bold text-[#111827] mb-4 leading-snug whitespace-pre-line">{filiere.title}</h3>
                                        <p className="text-gray-500 text-[15px] mb-8 flex-grow leading-[1.6]">
                                            {filiere.desc}
                                        </p>

                                        {/* Rating & Action */}
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-1.5">
                                                <div className="flex text-yellow-400">
                                                    {"★".repeat(5)}
                                                </div>
                                                <span className="text-[#111827] font-bold text-sm ml-1">{filiere.rating}</span>
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 py-3.5 rounded-full border border-[#2563eb] text-[#2563eb] font-bold text-sm hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors uppercase tracking-wide">
                                            S'inscrire
                                        </button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
