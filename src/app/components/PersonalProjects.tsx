import { ExternalLink, Github, Clock } from "lucide-react";
import { motion } from "motion/react";

export function PersonalProjects() {
  const projects = [
    {
      title: "SWITCH",
      subtitle: "Plateforme de vente d'objets de seconde main",
      description:
        "Plateforme de vente d'objets de seconde main pour la Côte d'Ivoire. Projet en cours de développement (non terminé).",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Firebase"],
      status: "En cours",
      github: null,
      demo: null,
    },
    {
      title: "PocketKids",
      subtitle: "Application web de suivi des dépenses familiales",
      description:
        "Permet aux parents de suivre les dépenses de leurs enfants et de leur attribuer de l'argent de poche. Interface entièrement repensée dans un style moderne de type fintech, avec alertes par e-mail. Réalisée avec l'aide de l'IA.",
      technologies: ["React", "Firebase", "EmailJS", "Vercel"],
      status: "Terminé",
      github: null,
      demo: null,
    },
    {
      title: "Quiz de révision — BTS IDA",
      subtitle: "Application de quiz interactif",
      description:
        "Application de quiz interactif conçue pour faciliter la révision et l'auto-évaluation des étudiants de BTS IDA, avec authentification des utilisateurs.",
      technologies: ["React", "Firebase Authentication", "Vercel"],
      status: "En ligne",
      github: null,
      demo: "https://quiz-reseau.vercel.app",
    },
    {
      title: "Application de gestion d'un lavage auto",
      subtitle: "Gestion d'un centre de lavage automobile",
      description:
        "Application de gestion d'un centre de lavage automobile : enregistrement des clients, gestion des services proposés et suivi des passages.",
      technologies: ["Visual Basic", "Microsoft Access"],
      status: "Terminé",
      github: null,
      demo: null,
    },
  ];

  const statusColor: Record<string, string> = {
    "En cours": "bg-yellow-400/20 text-yellow-400 border border-yellow-400/40",
    "Terminé": "bg-green-400/20 text-green-400 border border-green-400/40",
    "En ligne": "bg-blue-400/20 text-blue-400 border border-blue-400/40",
  };

  return (
    <section id="personal-projects" className="py-20 px-6 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk5NzIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
            Mes <span className="text-green-400 glow-text">Projets Personnels</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Des projets réalisés par passion, pour apprendre et résoudre de vrais problèmes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg border-2 border-green-400/30 hover:border-green-400 transition-all shadow-lg shadow-green-400/10 p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-green-400">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{project.subtitle}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusColor[project.status]}`}>
                  {project.status === "En cours" && <Clock size={12} className="inline mr-1 -mt-0.5" />}
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-green-400/10 text-green-400 text-xs rounded-full border border-green-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex gap-4 pt-2 border-t border-green-400/20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={16} /> Voir le projet
                    </a>
                  )}
                </div>
              )}
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
