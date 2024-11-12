import React from 'react';
import { useState } from 'react';
import { FormData } from './useSignUpForm';

const submitForm = async (formData: FormData) => {
  try {
    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: formData.username,
        email: formData.email,
        password: formData.password, }),
    });

    if (response.ok) {
      console.log('Usuário cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar usuário:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
};

export default submitForm;