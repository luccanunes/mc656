"use client";
import React from 'react';
import Button from "./button";
import useSignUpForm from './useSignUpForm';
import validateForm from './validateSignUp';
import submitForm from './submitForm';

const SignBox = () => {
  const { formData, handleChange } = useSignUpForm();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validateForm(formData);
    if (errors) {
      // Exibe as mensagens de erro ao usuário
      alert(Object.values(errors).join('\n'));
      return;
    }


    try {
        const response = await submitForm(formData)
        console.log("Resposta do servidor:", response);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro desconhecido.";
    }
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
        <input type = "text"
              required
              name="username"
              value={formData.username}
              onChange={handleChange}/>

        <div className = "labelline"> Enter your username </div>
      </div>

      <div className= "entryarea">
        <input type = "email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}/>

        <div className = "labelline"> Enter your email address </div>
      </div>
      
      <div className= "entryarea">
        <input type = "password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}/>

        <div className = "labelline"> Enter your password </div>
      </div>
      
      <div className= "entryarea">
        <input type = "password"
              required
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}/>

        <div className = "labelline"> Confirm your password </div>
      </div>

      <Button text = 'Register'/>

    </form>
  );
}

export default SignBox;
