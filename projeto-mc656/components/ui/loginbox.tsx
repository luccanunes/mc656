"use client";
import React from 'react';
import Button from "./button";
import cadastroBD from './loginBD';

const LoginBox = () => {
  const {email, setEmail, password, setPassword, handleSubmit } = cadastroBD();

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
        <input type = "text"
            required
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}/>

        <div className = "labelline"> Enter your email address </div>
      </div>

      <div className= "entryarea">
        <input type = "password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

        <div className = "labelline"> Enter your password </div>
      </div>

      <Button text = 'Log in'/>

    </form>
  );
}

export default LoginBox;
