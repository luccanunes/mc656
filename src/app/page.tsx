import Menu from "./components/ui/menu";
import Acesso from "./components/ui/acesso";
import Navbar from "./components/ui/navbar";
import HomeMain from "./components/home-main";

export default function Home() {
  return (
    <div className="display: flex" style={{ flexDirection: "column" }}>
      <Menu />
      <Acesso />
      <Navbar />
      <HomeMain />
    </div>
  );
}