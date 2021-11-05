class ProfessoresService {

    getAll() {
        const professores = localStorage.getItem('professores')
        return professores ? JSON.parse(professores) : []
    }

    get(id) {

    }

    create(dados) {
        const professores = this.getAll()
        professores.push(dados)

        localStorage.setItem('professores', JSON.stringify(professores))
    }

    update(dados) {

    }

    delete(id) {

    }
}

export default new ProfessoresService()