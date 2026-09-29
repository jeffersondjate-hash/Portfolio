import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { unsplash_tool } from "@/lib/unsplash";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Une plateforme e-commerce complète avec gestion de panier, paiements sécurisés et tableau de bord administrateur.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "ecommerce platform",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec fonctionnalités en temps réel et notifications.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
      image: "project management",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Generator",
      description: "Outil permettant aux créatifs de générer facilement leur portfolio en ligne avec des templates personnalisables.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      image: "portfolio website",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Tableau de bord météo interactif avec visualisation de données et prévisions détaillées.",
      technologies: ["React", "Chart.js", "Weather API"],
      image: "weather dashboard",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Analytics",
      description: "Plateforme d'analyse pour les réseaux sociaux avec rapports détaillés et insights en temps réel.",
      technologies: ["Vue.js", "Express", "MySQL", "D3.js"],
      image: "analytics dashboard",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Blog Platform",
      description: "Plateforme de blogging moderne avec éditeur Markdown, commentaires et système de tags.",
      technologies: ["Next.js", "Sanity CMS", "Vercel"],
      image: "blog writing",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Mes Projets</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Une sélection de projets qui démontrent mes compétences et ma passion pour le développement
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
