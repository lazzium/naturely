import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
    const laboratoires = [
        {
            title: "Laboratoire d'Ingénierie Informatique et Logicielle",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Laboratoire d'Ingénierie Multimédia",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Laboratoire d'Ingénierie Électronique et d'IA",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const servicesList = [
        {
            title: "Développement de logiciels",
            description: "Architecture informatique, conception orientée objet, solutions web/logicielles, etc.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
            light: true
        },
        {
            title: "Audit des S.I. et Bases de données",
            description: "Évaluation de la qualité, sécurité et performance des systèmes existants.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
            light: false
        },
        {
            title: "Informatique décisionnelle et Base de données",
            description: "Solutions de serveurs avec accès root pour un contrôle total.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
            light: true
        },
        {
            title: "Imprimerie numérique, créations graphiques et web",
            description: "Maquettage, logos, interfaces web (UI/UX), images publicitaires et intégrations photoréalistes.",
            image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde3?q=80&w=1000&auto=format&fit=crop",
            light: false
        },
        {
            title: "Sécurité informatique (Cybersécurité)",
            description: "Technologies de prévention et de détection de menaces.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
            light: true
        },
        {
            title: "Création et Optimisation de Base de Donnée",
            description: "Conception et mise en place de structures de données performantes sur mesure.",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
            light: false
        },
        {
            title: "Installation des parcs informatiques",
            description: "Installation, déploiement et maintien d'infrastructures fonctionnelles pour tous types d'entreprises.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
            light: true
        }
    ];

    return (
        <main className="min-h-screen w-full font-sans bg-white flex flex-col overflow-x-hidden pt-[80px]">
            <Navbar />

            {/* Hero Section with dark background mapping the screenshot's design */}
            <section className="relative pt-16 pb-20 px-4 md:px-8 lg:px-20 bg-brand-blue overflow-hidden w-full">
                {/* Background gradient from the screenshot (subtle green/light effect in the center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                        <span className="text-white/80 text-sm font-medium">FUN HIGH TECH</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-[1.15] tracking-tight drop-shadow-lg">
                        Accomplir notre mission sur la <br className="hidden md:block" />
                        <span className="text-brand-orange">révolution numérique</span> en Afrique
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        Pour mieux accomplir notre mission, nous nous appuyons sur trois laboratoires d'ingénierie spécifiques de pointe.
                    </p>
                    <button className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-full px-6 sm:px-8 py-3.5 text-sm font-medium transition-all inline-flex items-center gap-2 shadow-lg group">
                        Faire une demande <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Laboratoires Cards mapping the overlapping images in the screenshot */}
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
                    {laboratoires.map((lab, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-900 border border-white/10 shadow-2xl">
                            <img src={lab.image} alt={lab.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col items-start">
                                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 pr-4 leading-tight">
                                    {lab.title}
                                </h3>
                                <button className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-full px-5 py-2.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-lg">
                                    Découvrir <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services List Section matching the white sections in the screenshot */}
            <section className="py-24 px-6 sm:px-8 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-4">
                            <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Catalogue</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                            Des services variés pour couvrir tous vos besoins IT
                        </h2>
                        <p className="text-lg text-gray-500">
                            Nos prestations technologiques couvrent presque tous les aspects de l'IT. Découvrez notre catalogue complet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <div key={index} className={`rounded-[32px] p-8 md:p-10 flex flex-col h-full border ${service.light ? 'bg-white border-gray-100' : 'bg-brand-blue border-transparent'} transition-all hover:-translate-y-1 hover:shadow-xl`}>
                                <div className="mb-8">
                                    <h3 className={`text-2xl font-semibold mb-4 tracking-tight leading-snug ${service.light ? 'text-gray-900' : 'text-white'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed ${service.light ? 'text-gray-600' : 'text-white/70'}`}>
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-8">
                                    <button className={`w-full py-4 px-6 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 transition-colors ${service.light ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-brand-orange text-white hover:bg-brand-orange/90'}`}>
                                        Faire une demande <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promo Section at the bottom mapping the last part of screenshot */}
            <section className="py-0 px-0 bg-white">
                <div className="w-full bg-brand-blue overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[650px]">
                    <div className="p-12 md:p-24 flex-1 flex flex-col justify-center items-start lg:pl-32">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
                            Prêt à propulser votre entreprise <br className="hidden lg:block" /> vers l'avenir ?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                            Nous vous accompagnons dans toutes les étapes de votre transformation digitale pour garantir le succès de votre entreprise de demain.
                        </p>
                        <button className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-full px-10 py-5 text-lg font-semibold transition-all inline-flex items-center gap-3">
                            Contactez-nous aujourd'hui <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="w-full md:w-[45%] lg:w-[40%] h-[400px] md:h-auto">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Contact" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
