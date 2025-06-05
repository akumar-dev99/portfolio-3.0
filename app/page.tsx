import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Experience from '../components/Sections/Experience';
import Contact from '../components/Sections/Contact';

export default function Home() {
  return (
    <main className="space-y-40 px-6 py-10 md:px-20 max-w-7xl mx-auto">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
