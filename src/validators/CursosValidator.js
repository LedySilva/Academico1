import mensagens from "./mensagens"

const CursosValidador = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 10, message: mensagens.maxLength + ': 10' },
    },

    duracao: {
        maxLength: { value: 11, message: mensagens.maxLength + ': 11' },
    },

    modalidade: {
        required: mensagens.required,
        maxLength: { value: 1, message: mensagens.maxLength + ': 1' },
    }

}

export default CursosValidador