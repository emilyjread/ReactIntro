import React from "react"

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return <div>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do</h2>
        <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a Marathon</li>
            <li>Feed the dog</li>
        </ul>
 
    </div>
    }
}

export default ToDo