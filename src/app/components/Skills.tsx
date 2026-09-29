import { Code, Palette, Globe, Zap, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Palette className="text-purple-400" size={32} />,
      title: "Design",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    },
    {
      icon: <Globe className="text-orange-400" size={32} />,
      title: "Outils & DevOps",
      skills: ["Git", "Docker", "Vercel"],
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Soft Skills",
      skills: ["Travail d'équipe", "Communication", "Gestion de projet", "Résolution de problèmes"],
    },
    {
      icon: <Lightbulb className="text-blue-400" size={32} />,
      title: "Compétences Futures",
      skills: ["JAVA", "Python", "Flutter", "React"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
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
            <span className="text-green-400 glow-text">Compétences</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Un ensemble de compétences techniques et humaines pour mener à bien vos projets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg border-2 border-green-400/30 hover:border-green-400 transition-all shadow-lg shadow-green-400/10"
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
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