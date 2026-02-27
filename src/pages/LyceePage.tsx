import Navbar from '../components/Navbar';
import LyceeHero from '../components/LyceeHero';
import LyceeMethods from '../components/LyceeMethods';
import LyceePedagogy from '../components/LyceePedagogy';
import LyceeFilieres from '../components/LyceeFilieres';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';

export default function LyceePage() {
    return (
        <div className="min-h-screen bg-[#faf7fa]">
            <Navbar />
            <LyceeHero />
            <LyceePedagogy />
            <LyceeFilieres />
            <Footer />
            <MobileCTA />
        </div>
    );
}
