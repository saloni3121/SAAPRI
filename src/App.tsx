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
    <div className="min-h-screen bg-[#fafafa] w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-hidden">
        <Hero />
        <ImpactAreas />
        <Events />
        <News />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
