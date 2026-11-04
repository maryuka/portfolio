import FirstView from "@/components/FirstView";
import Catch from "@/components/Catch";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MenuButton from "@/components/parts/MenuButton";
import ThemeSwitcher from "@/components/parts/ThemeSwitcher";

export default function App() {
  return (
    <>
      <MenuButton />
      <ThemeSwitcher />
      <main>
        <FirstView />
        <Catch />
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
