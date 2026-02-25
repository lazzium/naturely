/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';

import Entities from './components/Entities';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen w-full font-sans bg-white flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Immersive Header Section */}
      <Hero />

      <div className="w-full bg-white">
        <Partners />
        <About />
        <Entities />
        <Services />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}

