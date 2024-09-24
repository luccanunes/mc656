"use client";
import Button from "./button";

const LoginBox = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Botão clicado!');
    
  };

  return (
    <form className= "loginbox" onSubmit={handleSubmit}>
    <div
        style={{
          color: '#ededed',
          fontSize: '40px',
          alignSelf: 'flex-start',
          // marginLeft: '20px',
          marginBottom: '30px'
        }}
      >
        Sign in
      </div>
      <div
        style={{
          color: '#ededed',
          fontSize: '24px',
          alignSelf: 'flex-start',
          // marginLeft: '20px',
          marginBottom: '30px'
        }}
      >
        If you don't have an account register, you can&nbsp;
          <a href="https://example.com" /*target="_blank"*/ rel="noopener noreferrer" style={{ color: '#18ACFE' }}>
              register here !
          </a>
      </div>
      <div className= "entryarea">
        <input type = "text" required/>
        <div className = "labelline"> Enter your email address or username </div>
      </div>

      <div className= "entryarea">
        <input type = "text" required/>
        <div className = "labelline"> Enter your password </div>
      </div>

      <Button text = 'Log in'/>

    </form>
  );
}

export default LoginBox;
