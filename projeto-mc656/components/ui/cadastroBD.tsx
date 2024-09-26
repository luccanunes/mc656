import React from 'react';
import { useState } from 'react';

const cadastroBD = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
        // Limpe os campos ou faça outra ação após o sucesso
      } else {
        console.error('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return { username, setUsername, email, setEmail, password, setPassword, handleSubmit };
};

export default cadastroBD;