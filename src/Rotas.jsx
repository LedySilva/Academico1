import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import AlunosForms from './pages/alunos/AlunosForms'
import Alunos from './pages/alunos/Alunos'
import CursosForms from './pages/cursos/CursosForms'
import Cursos from './pages/cursos/Cursos'
import ProfessoresForms from './pages/professores/ProfessoresForms'
import Professores from './pages/professores/Professores'
import DisciplinasForms from './pages/disciplinas/DisciplinasForms'
import Disciplinas from './pages/disciplinas/Disciplinas'

const Rotas = () => {
    return (
        <>
            <Switch>
                <Container className="mt-3">
                   


                    <Route exact path="/" component={Cursos} />
                <Route exact path="/cursos" component={Cursos} />
                <Route exact path="/cursos/create" component={CursosForms} />
                <Route exact path="/alunos" component={Alunos} />
                <Route exact path="/alunos/create" component={AlunosForms} />
                <Route exact path="/disciplinas" component={Disciplinas} />
                <Route exact path="/disciplinas/create" component={DisciplinasForms} />
                <Route exact path="/professores" component={Professores} />
                <Route exact path="/professores/create" component={ProfessoresForms} />
                </Container>
            </Switch>
        </>
    )
}

export default Rotas