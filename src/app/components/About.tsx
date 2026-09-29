import { User, Award, Coffee } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const stats = [
    { icon: <User className="text-green-400" size={24} />, value: "2+", label: "Années d'expérience" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc2OTk1MDIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            À <span className="text-green-400 glow-text">Propos</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Découvrez qui je suis et ce que je fais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-green-400">
              Mon Histoire
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Passionné par le développement web et la technologie, j'ai
              commencé mon parcours à l'EPCCI où j'ai développé mes
              compétences en développement frontend et design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Un développeur créatif qui aime transformer
              des idées en réalité.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Aujourd'hui, je me spécialise dans la création
              d'expériences web modernes et performantes, en mettant
              l'accent sur l'esthétique et l'expérience utilisateur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 p-6 rounded-lg text-center border-2 border-green-400/30 hover:border-green-400 transition-all shadow-lg shadow-green-400/10"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-400 mb-2 glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.8),
                       0 0 20px rgba(74, 222, 128, 0.6);
        }
      `}</style>
    </section>
  );
}