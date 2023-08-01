import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    render(){
        return(
            <div className="main">
                We are here too!
            </div>
        )
    }
}

export default About