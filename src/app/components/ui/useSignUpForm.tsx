import { useState } from 'react';

export interface FormData {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const useSignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return { formData, handleChange };
};

export default useSignUpForm;