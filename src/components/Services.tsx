import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Développement de logiciels",
        description: "Architecture informatique, conception logiciel orientés, solutions web, solution logicielles, base de données, intégration, ...",
        image: null,
        iconBg: "bg-brand-orange",
        iconColor: "text-white",
        cardBg: "bg-[#f4f5f7]",
        textColor: "text-gray-900",
        descColor: "text-gray-600"
    },
    {
        title: "Audit de système d'information & base de données",
        description: "Nous évaluons la qualité, la sécurité et de la performance de vos systèmes informatiques.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        iconBg: "bg-white",
        iconColor: "text-brand-orange",
        cardBg: "bg-gray-900",
        textColor: "text-white",
        descColor: "text-white/90"
    },
    {
        title: "Informatique décisionnelle & base de données",
        description: "Prenez le contrôle total de vos données pour une prise de décision éclairée et stratégique.",
        image: null,
        iconBg: "bg-brand-blue",
        iconColor: "text-white",
        cardBg: "bg-white border border-gray-100",
        textColor: "text-gray-900",
        descColor: "text-gray-600"
    },
    {
        title: "Imprimerie numérique & créations graphiques",
        description: "Maquettage, logos, interfaces web, images publicitaires et intégrations photo réalistes.",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde3?q=80&w=1000&auto=format&fit=crop",
        iconBg: "bg-white",
        iconColor: "text-brand-orange",
        cardBg: "bg-gray-900",
        textColor: "text-white",
        descColor: "text-white/90"
    },
    {
        title: "Sécurité informatique",
        description: "Solutions de cybersécurité axées sur la détection de menaces et les technologies de prévention.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
        iconBg: "bg-white",
        iconColor: "text-brand-blue",
        cardBg: "bg-brand-blue",
        textColor: "text-white",
        descColor: "text-white/90"
    },
    {
        title: "Optimisation de Base de Données",
        description: "Solutions sur mesure pour concevoir et améliorer des structures de données performantes.",
        image: null,
        iconBg: "bg-brand-orange",
        iconColor: "text-white",
        cardBg: "bg-[#f4f5f7]",
        textColor: "text-gray-900",
        descColor: "text-gray-600"
    },
    {
        title: "Installation des parcs informatiques",
        description: "Mise en place fluide et efficace de vos systèmes pour garantir un fonctionnement optimal.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
        iconBg: "bg-white",
        iconColor: "text-brand-orange",
        cardBg: "bg-gray-900",
        textColor: "text-white",
        descColor: "text-white/90"
    }
];

export default function Services() {
    // Only display the first 3 services as requested
    const displayedServices = services.slice(0, 3);

    return (
        <section className="w-full bg-white py-12 md:py-16 px-6 sm:px-8 lg:px-20">
            <div className="mb-8 md:mb-12 w-full flex items-center justify-between border-l-4 border-brand-orange pl-6">
                <div className="text-left w-full">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight">Nos Services</h2>
                    <p className="text-gray-500 text-sm mt-2">Expertise technologique au service de votre croissance.</p>
                </div>

                <a
                    href="/services"
                    className="btn-standard hidden md:flex bg-brand-blue text-white hover:bg-brand-blue/90"
                >
                    Voir plus <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayedServices.map((service, index) => (
                    <div
                        key={index}
                        className={`relative group aspect-square rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] z-0 hover:z-10 ${service.cardBg}`}
                    >
                        {/* Background Setup */}
                        {service.image ? (
                            <div className="absolute inset-0 z-0">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                            </div>
                        ) : (
                            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
                        )}

                        {/* Content Top */}
                        <div className={`relative z-10 w-full ${service.textColor}`}>
                            <h3 className="text-lg md:text-[20px] font-semibold tracking-tight leading-snug uppercase border-b border-current pb-2 mb-2 inline-block">
                                {service.title}
                            </h3>
                        </div>

                        {/* Content Bottom */}
                        <div className="relative z-10 flex items-end justify-between w-full mt-auto">
                            <p className={`text-[11px] md:text-[14px] leading-relaxed pr-4 max-w-[85%] font-medium ${service.descColor}`}>
                                {service.description}
                            </p>

                            <button className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white border border-current rounded-full ${service.textColor}`}>
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View More Button */}
            <div className="mt-8 flex justify-center md:hidden">
                <a
                    href="/services"
                    className="btn-standard group bg-brand-blue text-white hover:bg-brand-blue/90"
                >
                    Voir plus <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
}
