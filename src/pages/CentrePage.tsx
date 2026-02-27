import Navbar from '../components/Navbar';
import LyceeMethods from '../components/LyceeMethods';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';

export default function CentrePage() {
    return (
        <div className="min-h-screen bg-[#faf7fa] flex flex-col">
            <Navbar />
            <main className="flex-grow pt-[80px]">
                <LyceeMethods />
            </main>
            <Footer />
            <MobileCTA />
        </div>
    );
}
