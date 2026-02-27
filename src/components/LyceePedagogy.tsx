import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function LyceePedagogy() {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] leading-[1.2]">
                        Pédagogie unique avec des <br className="hidden lg:block" /> caractéristiques uniques
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

                    {/* Left: Points */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                            {/* Point 1 */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-[#3b82f6] bg-[#eff6ff] rounded-full p-[2px]">
                                        <CheckCircle2 size={22} className="fill-[#3b82f6] stroke-white" />
                                    </div>
                                    <h4 className="font-bold text-[#111827] text-base leading-tight">Forte compétitivité académique</h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed pl-10">
                                    Un cursus exigeant pour préparer au mieux les étudiants aux défis de demain.
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-[#3b82f6] bg-[#eff6ff] rounded-full p-[2px]">
                                        <CheckCircle2 size={22} className="fill-[#3b82f6] stroke-white" />
                                    </div>
                                    <h4 className="font-bold text-[#111827] text-base leading-tight">Excellence scolaire</h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed pl-10">
                                    Une rigueur académique de tous les instants pour viser les meilleurs résultats.
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-[#3b82f6] bg-[#eff6ff] rounded-full p-[2px]">
                                        <CheckCircle2 size={22} className="fill-[#3b82f6] stroke-white" />
                                    </div>
                                    <h4 className="font-bold text-[#111827] text-base leading-tight">Culture d'apprentissage intense</h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed pl-10">
                                    Un environnement stimulant favorisant la créativité et la recherche constante.
                                </p>
                            </div>

                            {/* Point 4 */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-[#3b82f6] bg-[#eff6ff] rounded-full p-[2px]">
                                        <CheckCircle2 size={22} className="fill-[#3b82f6] stroke-white" />
                                    </div>
                                    <h4 className="font-bold text-[#111827] text-base leading-tight">Esprit communautaire et de volontariat</h4>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed pl-10">
                                    S'accomplir au sein d'un groupe soudé, tourné vers l'entraide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image block */}
                    <div className="w-full lg:w-1/2 flex relative">
                        <div className="relative w-full h-full min-h-[400px]">
                            {/* Light Blue background shape */}
                            <div className="absolute inset-0 bg-[#eef5fd] rounded-[30px] transform skew-y-[-1deg] translate-y-3 -translate-x-3 z-0"></div>

                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                                alt="Étudiante souriante avec un ordinateur"
                                className="absolute inset-0 z-10 w-full h-full rounded-[30px] object-cover"
                            />

                            {/* Decorative element (curly line simulation) */}
                            <svg className="absolute -top-4 -left-4 z-20 w-12 h-12 text-gray-500 lg:-translate-x-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10c0 0 3-4 8-4s8 4 8 4-3 4-8 4-8-4-8-4z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
