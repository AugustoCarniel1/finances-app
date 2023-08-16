import React from 'react';

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
                Hello
            </div>
        )
    }
}

export default Home