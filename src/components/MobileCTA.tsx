import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const MobileCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate where we are in the document
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // If we are within 120 pixels of the bottom (typically the footer area), hide the CTA
            const bottomThreshold = documentHeight - 120;

            if (scrollPosition >= bottomThreshold) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check in case the user loads the page already at the bottom
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent -z-10" />
            <div className="px-4 pb-6 pt-16 flex items-center gap-4 pointer-events-none">
                <a
                    href="/brochure.pdf"
                    className="btn-blue flex-1 py-4 px-4 pointer-events-auto"
                >
                    <Download size={20} />
                    <span>Brochure</span>
                </a>
                <a
                    href="https://wa.me/yournumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-white-blue flex-1 py-4 px-4 !border-brand-blue !border-2 pointer-events-auto"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.004 2C6.48 2 2.004 6.477 2.004 12c0 1.767.46 3.426 1.267 4.864L2 22l5.308-1.392c1.406.817 3.033 1.286 4.696 1.286 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 1.815c4.52 0 8.185 3.665 8.185 8.185 0 4.52-3.665 8.185-8.185 8.185-1.5 0-2.905-.404-4.113-1.108l-.295-.171-3.05.8c.204-.77.53-2 .805-3.053l-.187-.305a8.134 8.134 0 01-1.345-4.348c0-4.52 3.665-8.185 8.185-8.185zm-2.486 2.373a.475.475 0 00-.332.146c-.114.113-.438.414-.438 1.008 0 .59.431 1.164.492 1.246.06.082.848 1.296 2.056 1.815.287.126.51.199.684.256.288.093.55.08.757.05.23-.034.71-.29 1.01-.57.3-.28.3-.466.27-.648-.03-.182-.12-.29-.255-.36-.135-.07-.8-.392-.924-.438-.124-.045-.215-.068-.305.068-.09.136-.347.438-.423.524-.078.085-.155.093-.29.023-.135-.07-.57-.211-1.085-.67-.393-.356-.658-.797-.733-.924-.076-.126-.008-.195.059-.263.062-.061.135-.157.203-.235.068-.078.09-.134.135-.224.045-.09.022-.17-.011-.237s-.305-.733-.42-.998c-.11-.266-.226-.23-.305-.233l-.26 0z" />
                    </svg>
                    <span>Contacter</span>
                </a>
            </div>
        </div>
    );
};

export default MobileCTA;
