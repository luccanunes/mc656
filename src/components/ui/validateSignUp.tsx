import { FormData } from './useSignUpForm' // Certifique-se do caminho correto

interface ValidationErrors {
    password?: string;
    confirm?: string;
}

const validateForm = (formData: FormData): ValidationErrors | null=> {
    const errors: ValidationErrors = {};

    if (formData.password.length < 6) {
        errors.password = 'A senha deve ter pelo menos 6 caracteres.';
    }

    if (formData.password !== formData.confirm) {
        errors.confirm = 'A senha e a confirmação devem ser iguais.';
    }

    return Object.keys(errors).length > 0 ? errors : null;
};

export default validateForm;