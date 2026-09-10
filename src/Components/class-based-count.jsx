import {Component} from "react";    

class ClassCount extends Component{
    state={
        count: 0,
    }

    handlefunc=()=>{
        this.setState({count: this.state.count + 1})
    }

    render(){
            return(
            <div>
                <h1>{this.state.count}</h1>
            <button onClick={this.handlefunc}>Increment</button>
            </div>
        )
    }
}

export default ClassCount;