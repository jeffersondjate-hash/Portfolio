import { Github, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 px-6">
      
      {/* Code Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk5NzIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-400/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl shadow-green-400/50">
              <img
                src="/profile.jpg"
                alt="Jefferson Djaté"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Bonjour, je suis{" "}
            <span className="text-green-400 glow-text">
              Jefferson Djaté
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-[Times_New_Roman]"
          >
            Développeur passionné par la création,
            <br />
            sortie de l'EPCCI
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-[Times_New_Roman]"
          >
            Je transforme des idées en applications web modernes
            et performantes
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-400/20 transition-colors shadow-md border-2 border-green-400/30 hover:border-green-400"
            >
              <Github size={24} className="text-green-400" />
            </motion.a>
          </motion.div>

          {/* Button */}
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(74, 222, 128, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 bg-green-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-green-300 transition-colors shadow-lg font-bold"
          >
            Découvrir mon parcours

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>

        </div>
      </div>

      {/* Glow effect */}
      <style>{`
        .glow-text {
          text-shadow:
            0 0 10px rgba(74, 222, 128, 0.8),
            0 0 20px rgba(74, 222, 128, 0.6),
            0 0 30px rgba(74, 222, 128, 0.4);
        }
      `}</style>
    </section>
  );
}