import Button from "./ui/button";
import LeftImage from "./ui/leftimage";

export default function Login() {
  return (
    <div className="container">
      <LeftImage />
      <div className="login">
        <h1>Login</h1>
        <div className="input-container">
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
        </div>
        <Button text="Entrar" />
      </div>
    </div>
  );
}
