import Image from "next/image"

export default function Menu() {
  // ←
  return (
    <div style={{ fontSize: '30px', marginRight: '50px', marginTop: '50px', position: 'absolute', right: 0, textAlign: 'right' }}>
      <a href="https://example.com" /*target="_blank"*/ rel="noopener noreferrer">
        ←
        {/* <Image
            src={acesso}
            width={100}
            height={100}
            alt=""
            /> */}
      </a>
    </div>
  );
}
