import Image from "next/image"
import menu from "./menu.png"

export default function Menu() {
  // ←
  return (
    <div style={{ fontSize: '30px', marginRight: '50px', marginTop: '75px', position: 'absolute', right: 0, textAlign: 'right' }}>
      <a href="https://example.com" /*target="_blank"*/ rel="noopener noreferrer">

        <Image
          src={menu}
          width={30}
          height={30}
          alt=""
        />
      </a>
    </div>
  );
}
