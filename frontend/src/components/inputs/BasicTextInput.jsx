import React from "react";

import { Row, Col } from "react-bootstrap";

class BasicTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    changeText(e) {
        
    }

    render() {
        return (
            ['text', 'password', 'email', 'date'].includes(this.props.type) ?
                <>
                    <Row>
                        <Col md={12}>
                            <label>{this.props.labelName}</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <input type={this.props.type} id={this.props.inputId} onChange={(e) => this.props.changeValue(e, this.props.type)}></input> 
                        </Col>
                    </Row>
                </>
            : <></>
        )
    }
}

export default BasicTextInput