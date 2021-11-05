import mensagens from "./mensagens"

const ProfessoresValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50'},
    },

    cpf: {
        required: mensagens.required,
        maxLength: { value: 14, message: mensagens.maxLength + ': 14' },
    },

    matricula: {
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    salario: {
        minLength: { value: 4, message: mensagens.minLength + ': 4' },
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    email: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    telefone: {
        minLength: { value: 10, message: mensagens.minLength + ': 10' },
        maxLength: { value: 20, message: mensagens.maxLength + ': 20' },
    },

    cep: { 
        maxLength: { value: 9, message: mensagens.maxLength + ': 9' },
    },

    logradouro: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    complemento: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    numero: {
        maxLength: { value: 4, message: mensagens.maxLength + ': 4' },
    },

    bairro: {
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

}

export default ProfessoresValidator