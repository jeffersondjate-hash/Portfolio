import {
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Développeur Frontend",
      company: "",
      period: "2024 - 2026",
      description:
        "Création d'interfaces utilisateur modernes et responsives pour des clients variés dans différents secteurs.",
      achievements: [],
    },
    {
      type: "education",
      title: "BTS en Informatique",
      company:
        "Ecole Pratique De La Chambre De Commerce Et D'Industrie",
      period: "2024 - 2026",
      description:
        "Spécialisation en développement web et applications distribuées.",
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk5NzIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Mon <span className="text-green-400 glow-text">Parcours</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Expériences professionnelles et formation académique
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8 border-l-2 border-green-400/30 last:pb-0"
            >
              <motion.div 
                className="absolute -left-4 top-0 p-2 bg-gray-900 border-2 border-green-400 rounded-full shadow-lg shadow-green-400/30"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {exp.type === "work" ? (
                  <Briefcase
                    className="text-green-400"
                    size={20}
                  />
                ) : (
                  <GraduationCap
                    className="text-green-400"
                    size={20}
                  />
                )}
              </motion.div>

              <motion.div 
                className="bg-gray-900 p-6 rounded-lg border-2 border-green-400/30 hover:border-green-400 transition-all shadow-lg shadow-green-400/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-green-400">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} className="text-green-400" />
                    {exp.period}
                  </div>
                </div>

                {exp.company && (
                  <p className="text-green-300 font-medium mb-3">
                    {exp.company}
                  </p>
                )}
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>

                {exp.achievements &&
                  exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map(
                        (achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-green-400 mt-1">
                              ✓
                            </span>
                            {achievement}
                          </li>
                        ),
                      )}
                    </ul>
                  )}
              </motion.div>
            </motion.div>
          ))}
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