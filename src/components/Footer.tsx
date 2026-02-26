import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="w-full relative px-4 md:px-8 py-6 md:py-10 bg-gradient-to-b from-[#e8f3fa] via-[#e1eff8] to-[#d6eaed]">
            {/* Top CTA Section */}
            <div className="max-w-4xl mx-auto text-center mb-8 px-4">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 leading-tight">
                    Prêt à prendre en main votre avenir avec <span className="text-brand-orange">FUN HIGH TECH</span> ?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Accédez à des formations de pointe et des services d'excellence pour le développement numérique et technologique de l'Afrique.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-blue/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Commencer
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-0.5">
                        Contactez-nous
                    </button>
                </div>
            </div>

            {/* Main Footer Box */}
            <div className="w-full max-w-[96%] xl:max-w-[98%] mx-auto bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-6 lg:p-10 border border-gray-300 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Column: Newsletter & Info */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="FUN HIGH TECH Logo" className="h-8 w-auto object-contain" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 text-[15px] mb-4 tracking-tight">Inscrivez-vous à notre newsletter.</h3>
                            <div className="relative flex items-center w-full max-w-[340px]">
                                <input
                                    type="email"
                                    placeholder="Entrez votre email"
                                    className="w-full pl-6 pr-28 py-3.5 bg-transparent border border-gray-200 rounded-full text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-all"
                                />
                                <button className="absolute right-1.5 px-6 py-2.5 bg-brand-blue text-white rounded-full text-sm font-medium hover:bg-brand-blue/90 transition-colors">
                                    S'inscrire
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-5 leading-relaxed max-w-[300px]">
                                En vous inscrivant, vous acceptez notre politique de confidentialité et consentez à recevoir des mises à jour de notre structure.
                            </p>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 lg:pl-8">
                        <div>
                            <h4 className="text-gray-500 mb-6 text-[13px] font-medium tracking-wide">Formations</h4>
                            <ul className="space-y-3.5">
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Diplôme de technicien</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Formation Professionnelle</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Formation Continue</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-500 mb-6 text-[13px] font-medium tracking-wide">Nos Entités</h4>
                            <ul className="space-y-3.5">
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Collège Anta</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Lycée</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Centre</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-500 mb-6 text-[13px] font-medium tracking-wide">À Propos</h4>
                            <ul className="space-y-3.5">
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">L'Équipe</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Partenaires</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Fondation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-500 mb-6 text-[13px] font-medium tracking-wide">Support</h4>
                            <ul className="space-y-3.5">
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">FAQ</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-sm font-semibold">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-500 mb-6 text-[13px] font-medium tracking-wide">Légal</h4>
                            <ul className="space-y-3.5">
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-[13px] sm:text-sm font-semibold whitespace-nowrap">Conditions</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-[13px] sm:text-sm font-semibold whitespace-nowrap">Confidentialité</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-brand-blue transition-colors text-[13px] sm:text-sm font-semibold whitespace-nowrap">Mentions légales</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex justify-center text-center">
                    <p className="text-gray-500 text-xs font-medium">
                        © {new Date().getFullYear()} FUN HIGH TECH. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
