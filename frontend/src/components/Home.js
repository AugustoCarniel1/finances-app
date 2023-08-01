import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    render(){
        return(
            <div className="main">
                Hello
            </div>
        )
    }
}

export default Home