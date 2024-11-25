import Back from "./ui/back";
import Acesso from "./ui/acesso";
import LeftImage from "./ui/leftimage";
import LoginBox from "./ui/loginbox";

export default function Login() {
  return (
    <div className="display: flex">
    <Back/>
    <Acesso/>
    <LeftImage/>
    <LoginBox/>
  </div>
  );
}

// image='./components/ui/parque.jpg'