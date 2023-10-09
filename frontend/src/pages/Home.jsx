import React from 'react';

import { Row, Col, Button } from "react-bootstrap";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    render(){
        return(
            <div className="main">
                <Row>
                    <Col>
                        <Button onClick={this.submit}>Registrar</Button>                            
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home