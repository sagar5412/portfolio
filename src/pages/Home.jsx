import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import About from "../components/About";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>
      <SEO />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <About />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
