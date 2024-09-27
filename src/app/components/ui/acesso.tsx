import Image from "next/image" 
import acesso from "./AcessoFacil.png";

export default function Acesso() {
  return (
  <div style={{ marginLeft: '50px' , marginTop: '50px' , position : 'absolute'}}>
        <a href="https://example.com" /*target="_blank"*/ rel="noopener noreferrer">
            <Image
            src={acesso}
            width={100}
            height={100}
            alt=""
            />
        </a>
    </div>
  );
}
