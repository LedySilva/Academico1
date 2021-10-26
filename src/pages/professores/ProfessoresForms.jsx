import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaAngleDoubleLeft, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';

const ProfessoresForms = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()

    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
         <h1>Página Professores</h1>
            <Box title="Professores">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}> Nome :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", { required: true })} />
                            {errors.nome && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}> CPF : </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("cpf", { required: true })} />
                            {errors.cpf && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}> Matrícula :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("matricula", { required: true })} />
                            {errors.matricula && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="salario">
                        <Form.Label column sm={2}> Salário :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("salario",)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}> Email :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="telefone">
                        <Form.Label column sm={2}> Telefone :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("telefone")} />
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="cep">
                        <Form.Label column sm={2}> Cep :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("cep", { required: true })} />
                            {errors.cep && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="logradouro">
                        <Form.Label column sm={2}> Logradouro :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("logradouro")} />
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="complemento">
                        <Form.Label column sm={2}> Complemento :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("complemento")} />
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="numero">
                        <Form.Label column sm={2}> Número :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" {...register("numero")} />
                        </Col>
                    </Form.Group><Form.Group as={Row} className="mb-3" controlId="bairro">
                        <Form.Label column sm={2}> Bairro :</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("bairro")} />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="dark" onClick={handleSubmit(enviarDados)}> <FaCheckDouble /> Salvar </Button>
                        <Link className="btn btn-secondary ml-3" to="/cursos"><FaAngleDoubleLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default ProfessoresForms