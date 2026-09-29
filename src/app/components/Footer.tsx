import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-green-400/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-green-400">
              Mon Portfolio
            </h3>
            <p className="text-gray-400">
              Développeur passionné créant des expériences web
              exceptionnelles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-green-400">
              Navigation
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                À propos
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Compétences
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Parcours
              </a>
              <a
                href="#personal-projects"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Projets
              </a>
            </div>
          </motion.div>

        </div>

        <div className="border-t border-green-400/30 pt-8 text-center">
          <motion.p
            className="text-gray-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Créé par DSMDJ
          </motion.p>
        </div>
      </div>
    </footer>
  );
}