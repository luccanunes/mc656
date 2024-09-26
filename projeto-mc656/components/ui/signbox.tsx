"use client";
import React from 'react';
import Button from "./button";
import cadastroBD from './cadastroBD';

const SignBox = () => {
  const { username, setUsername, email, setEmail, password, setPassword, handleSubmit } = cadastroBD();

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
        <input type = "text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>

        <div className = "labelline"> Enter your username </div>
      </div>

      <div className= "entryarea">
        <input type = "text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>

        <div className = "labelline"> Enter your email address </div>
      </div>
      
      <div className= "entryarea">
        <input type = "text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

        <div className = "labelline"> Enter your password </div>
      </div>
      
      <div className= "entryarea">
        <input type = "text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

        <div className = "labelline"> Confirm your password </div>
      </div>

      <Button text = 'Register' onClick={handleSubmit}/>

      {/* <input type = 'text'/> */}

    </form>
  );
}

export default SignBox;
