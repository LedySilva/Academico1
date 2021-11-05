import mensagens from "./mensagens"

const DisciplinaValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength + ': 50' },
    },

    curso: {
        required: mensagens.required,
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

}

export default DisciplinaValidator