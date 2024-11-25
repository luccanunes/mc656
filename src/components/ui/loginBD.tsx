import React from 'react';
import { useState } from 'react';

const loginBD = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password }),
      });

      if (response.ok) {
        alert('Login realizado com sucesso!');
      } else {
        alert("Falha no login, tente novamente")
        console.error('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return {email, setEmail, password, setPassword, handleSubmit };
};

export default loginBD;