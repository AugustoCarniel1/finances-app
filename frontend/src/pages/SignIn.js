import React from "react";

import { Row, Col, Button } from "react-bootstrap";

import BasicTextInput from "../components/inputs/BasicTextInput";

import { createRequest } from "../functions/requests/request"

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        }

        this.submit = this.submit.bind(this)
    }

    changeValue(e) {
        console.log(e.target.value, this.state.cpf)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submit() {
        console.log(this.state)
        var form = {
            method: 'post',
            url: 'finances/user'
        }

        var data = {
            name: this.state.name,
            cpf: this.state.cpf,
            email: this.state.email,
            password: this.state.password,
            birth_date: this.state.birthDate,
            phone: this.state.phone
        }

        createRequest(form, data).then((response) => {
            console.log(response)
        })
        
    }

    render() {
        return (
            <>
                <section className="container">
                    <div className="register-box">
                        <h1 className="title">Cadastro</h1>
                        <BasicTextInput labelName='Nome Completo' placeholder='Insira seu nome completo...' type='text' inputId='name' changeValue={(e, type) => this.changeValue(e, type)} />
                        <BasicTextInput labelName='Email' placeholder='Insira seu email...' type='email' inputId='email' changeValue={(e, type) => this.changeValue(e, type)} />
                        <BasicTextInput labelName='Senha' placeholder='Insira sua senha...' type='text' inputId='password' changeValue={(e, type) => this.changeValue(e, type)} />
                        <BasicTextInput labelName='Confirmar Senha' placeholder='Insira sua senha novamente...' type='text' inputId='confirmPassword' changeValue={(e, type) => this.changeValue(e, type)} />
                        <BasicTextInput labelName='CPF' placeholder='000.000.000-00' type='cpf' inputId='cpf' value={this.state.cpf} changeValue={(e, type) => this.changeValue(e, type)} />
                        {/* <BasicTextInput labelName='Telefone' type='phone' inputId='phone' changeValue={(e, type) => this.changeValue(e, type)} /> */}
                        <BasicTextInput labelName='Data de Nascimento' type='date' inputId='birthDate' changeValue={(e, type) => this.changeValue(e, type)} />
                        <Row>
                            <Col>
                                <Button onClick={this.submit}>Registrar</Button>                            
                            </Col>
                        </Row>
                    </div>
                </section>
            </>
        )
    }

}

export default SignIn