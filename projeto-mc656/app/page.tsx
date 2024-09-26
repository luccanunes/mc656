import Menu from "./components/ui/menu";
import Acesso from "./components/ui/acesso";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="display: flex">
      <Menu />
      <Acesso />
      <Navbar />
    </div>
  );
}