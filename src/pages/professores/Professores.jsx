import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ProfessoresService from '../../services/academico/ProfessoresService'

const Professores = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        const professores = ProfessoresService.getAll()
        setProfessores(professores)
    }, [])

    return (
        <>
            <Box title="Professores">
                <Link to="/professores/create" className="btn btn-warning mb-3"><FaPlus />Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Matricula</th>
                            <th>Salario</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((professores, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{professores.nome}</td>
                                <td>{professores.cpf}</td>
                                <td>{professores.matricula}</td>
                                <td>{professores.salario}</td>
                                <td>{professores.email}</td>
                                <td>{professores.telefone}</td>
                                <td>{professores.cep}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Professores