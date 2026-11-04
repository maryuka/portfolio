import FirstView from "@/components/FirstView";
import Catch from "@/components/Catch";
import ParallaxImage from "@/components/ParallaxImage";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <FirstView />
      <Catch />
      <ParallaxImage src="/img/middle.webp" />
      <About />
      <Works />
      <Skills />
      <ParallaxImage src="/img/bottom.webp" />
      <Contact />
    </>
  );
}
