import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { PersonalProjects } from "@/app/components/PersonalProjects";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <PersonalProjects />
      </main>
      <Footer />
    </div>
  );
}