import React from 'react';

class About extends React.Component {
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