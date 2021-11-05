class DisciplinasService {

    getAll() {
        const disciplinas = localStorage.getItem('disciplinas')
        return disciplinas ? JSON.parse(disciplinas) : []
    }

    get(id) {

    }

    create(dados) {
        const disciplinas = this.getAll()
        disciplinas.push(dados)

        localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    }

    update(dados) {

    }

    delete(id) {

    }
}

export default new DisciplinasService()