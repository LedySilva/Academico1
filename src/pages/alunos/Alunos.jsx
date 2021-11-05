import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AlunosService from '../../services/academico/AlunosService'

const Alunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        const alunos = AlunosService.getAll()
        setAlunos(alunos)
    }, [])

    return (
        <>
            <Box title="Alunos">
                <Link to="/alunos/create" className="btn btn-warning  mb-3"><FaPlus />Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                       
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Matricula</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.telefone}</td>
                                <td>{aluno.cep}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Alunos