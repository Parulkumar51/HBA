import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ThreeDViewer from './components/ThreeD/Viewer';
import Configurator from './components/ThreeD/Configurator';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

type Section = 'home' | 'portfolio' | '3d-viewer' | 'configurator' | 'services' | 'about' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <Portfolio />
            <Services />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Portfolio detailed={true} />
          </motion.div>
        );
      case '3d-viewer':
        return (
          <motion.div
            key="3d-viewer"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <ThreeDViewer />
          </motion.div>
        );
      case 'configurator':
        return (
          <motion.div
            key="configurator"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Configurator />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Services detailed={true} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <About />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>

      <Footer />
      
      <Chatbot isOpen={chatbotOpen} onToggle={() => setChatbotOpen(!chatbotOpen)} />
      
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-transparent to-zinc-900"></div>
      </div>
    </div>
  );
}

export default App;