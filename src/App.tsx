import { Outlet } from "react-router";
import MenuButton from "./components/parts/MenuButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <MenuButton />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
