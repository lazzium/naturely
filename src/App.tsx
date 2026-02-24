/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Discover from './components/Discover';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen w-full font-sans bg-white flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Immersive Header Section */}
      <div className="w-full flex flex-col pt-20 md:pt-24 px-4 md:px-8 pb-4">
        <div className="w-full rounded-none h-[85vh] md:h-[calc(100vh-140px)] min-h-[500px] md:min-h-[600px] flex flex-col relative overflow-hidden shadow-2xl ring-1 ring-black/5 bg-black">
          <Hero />
        </div>
      </div>

      {/* Legacy/Partners, About, and Services: Now blending with the white background */}
      <div className="w-full bg-white">
        <Partners />
        <About />
        <Discover />
        <Services />
      </div>

      <Footer />
    </main>
  );
}

