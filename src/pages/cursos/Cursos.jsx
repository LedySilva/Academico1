import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import CursosService from '../../services/academico/CursosService'

const Cursos = () => {

    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        const cursos = CursosService.getAll()
        setCursos(cursos)
    }, [])

    return (
        <>
            <Box title="Cursos">
                <Link to="/cursos/create" className="btn btn-warning mb-3"><FaPlus />Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                      
                            <th>Nome</th>
                            <th>Duração</th>
                            <th>Modalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((curso, i) => (
                            <tr key={i}>
                            <td>{i}</td>
                            <td>{curso.nome}</td>
                            <td>{curso.duracao}</td>
                            <td>{curso.modalidade}</td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Cursos
