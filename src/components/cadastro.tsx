import Back from "./ui/back";
import Acesso from "./ui/acesso";
import LeftImage from "./ui/leftimage";
import SignBox from "./ui/signbox";

export default function Cadastro() {
  return (
    <div className="display: flex">
      <Back/>
      <Acesso/>
      <LeftImage/>
      <SignBox/>
    </div>
  );
}
