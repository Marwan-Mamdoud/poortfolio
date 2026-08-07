import ShaderBackground from "@/components/ShaderBackground";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-surface text-on-surface flex flex-col overflow-hidden">
      <ShaderBackground />
      <ScanlineOverlay />
      <TopNav />
      <div className="max-w-[1280px] w-full mx-auto grid-pattern">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
