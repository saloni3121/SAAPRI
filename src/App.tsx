import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactAreas from './components/ImpactAreas';
import Events from './components/Events';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <header>
        <h1>SAAPRI</h1>
        <p>South Asian American Policy Research Institute</p>
      </header>
      <main>
        <Hero />
        <ImpactAreas />
        <Events />
        <News />
        <Testimonials />
        <Newsletter />
        <p>Welcome to the SAAPRI website.</p>
      </main>
      <Footer />
      <footer>
        <p>&copy; {new Date().getFullYear()} SAAPRI</p>
      </footer>
      <Chatbot />
    </div>
  );
}

export default App;
