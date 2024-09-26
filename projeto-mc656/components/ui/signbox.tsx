"use client";
import Button from "./button";

const SignBox = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Botão clicado!');
    
  };

  return (
    <form className= "signbox" onSubmit={handleSubmit}>
      <div
        style={{
          color: '#ededed',
          fontSize: '40px',
          alignSelf: 'flex-start',
          // marginLeft: '20px',
          marginBottom: '30px'
        }}
      >
        Sign up
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
        If you already have an account regitered, you can&nbsp;
          <a href="https://example.com" /*target="_blank"*/ rel="noopener noreferrer" style={{ color: '#18ACFE' }}>
              login here !
          </a>
      </div>
      <div className= "entryarea">
        <input type = "text" required/>
        <div className = "labelline"> Enter your username </div>
      </div>

      <div className= "entryarea">
        <input type = "text" required/>
        <div className = "labelline"> Enter your email address </div>
      </div>
      
      <div className= "entryarea">
        <input type = "password" required/>
        <div className = "labelline"> Enter your password </div>
      </div>
      
      <div className= "entryarea">
        <input type = "password" required/>
        <div className = "labelline"> Confirm your password </div>
      </div>

      <Button text = 'Register'/>

      {/* <input type = 'text'/> */}

    </form>
  );
}

export default SignBox;