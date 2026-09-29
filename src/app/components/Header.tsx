import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-green-400/30 shadow-lg shadow-green-400/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-xl text-green-400 glow-text"
          >
            Mon Portfolio
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("about")} 
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              À propos
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("skills")} 
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Compétences
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Parcours
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection("personal-projects")}
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Projets
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 pb-4"
          >
            <button onClick={() => scrollToSection("about")} className="text-left text-gray-300 hover:text-green-400 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-left text-gray-300 hover:text-green-400 transition-colors">
              Compétences
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-left text-gray-300 hover:text-green-400 transition-colors">
              Parcours
            </button>
            <button onClick={() => scrollToSection("personal-projects")} className="text-left text-gray-300 hover:text-green-400 transition-colors">
              Projets
            </button>
          </motion.div>
        )}
      </nav>
      
      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.8),
                       0 0 20px rgba(74, 222, 128, 0.6);
        }
      `}</style>
    </motion.header>
  );
}