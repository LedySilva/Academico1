import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import AlunosForms from './pages/alunos/AlunosForms'
import CursosForms from './pages/cursos/CursosForms'
import ProfessoresForms from './pages/professores/ProfessoresForms'
import DisciplinasForms from './pages/disciplinas/DisciplinasForms'

const Rotas = () => {
    return (
        <>
            <Switch>
                <Container className="mt-3">
                    <Route exact path="/" component={CursosForms} />
                    <Route exact path="/cursos" component={CursosForms} />
                    <Route exact path="/alunos" component={AlunosForms} />
                    <Route exact path="/professores" component={ProfessoresForms} />
                    <Route exact path="/disciplinas" component={DisciplinasForms} />
                </Container>
            </Switch>
        </>
    )
}

export default Rotas