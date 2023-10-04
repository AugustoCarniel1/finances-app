import React from "react";

import { Row, Col } from "react-bootstrap";

import { cpfMask } from "../utils/string.js";

class BasicTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cpf: ''
        }
    }

    changeText(e) {
        
    }

    render() {
        return (
            <>
                <Row>
                    <Col md={12}>
                        <label>{this.props.labelName}</label>
                    </Col>
                </Row>
            { ['text', 'password', 'email', 'date'].includes(this.props.type) ?
                <>
                    <Row>
                        <Col md={12}>
                            <input 
                                id={this.props.inputId} 
                                type={this.props.type} 
                                placeholder={this.props.placeholder} 
                                onChange={(e) => this.props.changeValue(e)}
                            ></input> 
                        </Col>
                    </Row>
                </>
            : ['cpf', 'phone'].includes(this.props.type) ?
                <>
                    <Row>
                        <Col md={12}>
                            <InputMask 
                                {...this.props}
                                id={this.props.inputId}
                                value={this.state.cpf} 
                                type='text'
                                onChange={(e) => this.props.changeValue(cpfMask(e), this.props.type)}
                            />
                        </Col>
                    </Row>  
                </> 
            : <></> }
        </>
        )
    }
}

export default BasicTextInput