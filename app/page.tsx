
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Footer from "@/components/layout/Footer";


export default function HomePage() {
  
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Footer />
      
    </main>
  );
}