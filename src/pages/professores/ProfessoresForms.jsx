

    import React from 'react'
    import { Col, Form, Row, Button } from 'react-bootstrap'
    import { useForm } from 'react-hook-form'
    import { FaArrowLeft, FaCheck } from 'react-icons/fa'
    import { Link } from 'react-router-dom'
    import { mask, unMask } from 'remask'
    import Box from '../../components/Box'
    import apiCep from '../../services/apiCep'
    import ProfessoresService from '../../services/academico/ProfessoresService'
    import validador from '../../validators/ProfessoresValidator'
    
    
    const ProfessoresForms = (props) => {
    
    
        const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    
        function enviarDados(dados) {
            ProfessoresService.create(dados)
            props.history.push('/professores')
        }
    
        function handleChange(event) {
            const name = event.target.name
            const mascara = event.target.getAttribute('mask')
    
            let valor = unMask(event.target.value)
            valor = mask(valor, mascara)
    
            setValue(name, valor)
        }
    
        function handleCep(event) {
    
            const valor = unMask(event.target.value)
    
            apiCep.get(`/ws/${valor}/json/`).then(resultado => {
                const endereco = resultado.data
    
                setValue('logradouro', endereco.logradouro)
                setValue('bairro', endereco.bairro)
                setValue('complemento', endereco.complemento)
                setValue('uf', endereco.uf)
                setValue('municipio', endereco.localidade)
    
    
            })
    
        }
    
    
        return (
            <>
                <Box title="Professores">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="nome">
                            <Form.Label column sm={2}> Nome :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("nome", validador.nome)} />
                                {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="cpf">
                            <Form.Label column sm={2}> CPF: </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    {...register("cpf", validador.cpf)}
                                    mask="999.999.999-99"
                                    onChange={handleChange}
                                />
                                {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="matricula">
                            <Form.Label column sm={2}> Matr??cula :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("matricula", validador.matricula)} />
                                {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="salario">
                            <Form.Label column sm={2}> Sal??rio :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("salario", validador.salario)} />
                                {errors.salario && <span className="text-danger">{errors.salario.message}</span>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="email">
                            <Form.Label column sm={2}> Email :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("email", validador.email)} />
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="telefone">
                            <Form.Label column sm={2}> Telefone :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("telefone", validador.telefone)} mask="(99) 99999-9999" onChange={handleChange} />
                                {errors.telefone && <span className="text-danger">{errors.telefone.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="cep">
                            <Form.Label column sm={2}> Cep :</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    {...register("cep", validador.cep)}
                                    mask="99999-999"
                                    onChange={handleChange}
                                    onBlur={handleCep}
                                />
                                {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="logradouro">
                            <Form.Label column sm={2}> Logradouro :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("logradouro", validador.logradouro)} />
                                {errors.logradouro && <span className="text-danger">{errors.logradouro.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="uf">
                            <Form.Label column sm={2}> UF :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("uf")} />
                            </Col>
                            </Form.Group><Form.Group as={Row} className="mb-3" controlId="municipio">
                            <Form.Label column sm={2}> Munic??pio :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("municipio")} />
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="complemento">
                            <Form.Label column sm={2}> Complemento :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("complemento", validador.complemento)} />
                                {errors.complemento && <span className="text-danger">{errors.complemento.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="numero">
                            <Form.Label column sm={2}> N??mero :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("numero", validador.numero)} />
                                {errors.numero && <span className="text-danger">{errors.numero.message}</span>}
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3" controlId="bairro">
                            <Form.Label column sm={2}> Bairro :</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" {...register("bairro", validador.bairro)} />
                                {errors.bairro && <span className="text-danger">{errors.bairro.message}</span>}
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" onClick={handleSubmit(enviarDados)}> <FaCheck /> Salvar </Button>
                            <Link className="btn btn-secondary ml-3" to="/professores"><FaArrowLeft /> Voltar</Link>
                        </div>
                    </Form>
                </Box>
            </>
        )
    }
 

export default ProfessoresForms