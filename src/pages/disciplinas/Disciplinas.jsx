import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import DisciplinasService from '../../services/academico/DisciplinasService'

const Disciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(()=>{
        const disciplinas = DisciplinasService.getAll()
        setDisciplinas(disciplinas)
    }, [])

    return (
        <>
            <Box title="Disciplinas">
                <Link to="/disciplinas/create" className="btn btn-warning mb-3"><FaPlus />Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                       
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplina, i) => (
                            <tr key={i}>
                            <td>{i}</td>
                            <td>{disciplina.nome}</td>
                            <td>{disciplina.curso}</td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Disciplinas