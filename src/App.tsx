import FirstView from "@/components/FirstView";
import Catch from "@/components/Catch";
import ParallaxImage from "@/components/ParallaxImage";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MenuButton from "@/components/parts/MenuButton";
import { img } from "@/lib/asset";

export default function App() {
  return (
    <>
      <MenuButton />
      <main>
        <FirstView />
        <Catch />
        <ParallaxImage src={img("middle.webp")} />
        <About />
        <Works />
        <Skills />
        <ParallaxImage src={img("bottom.webp")} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
