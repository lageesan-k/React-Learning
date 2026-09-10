import {Component} from 'react';

class MyComponent extends Component {

    state={
        showText: true,
        changecolor: false,
    };

/*
    handlerfunc() {
                let textblock = document.getElementById("textblock");
                if (textblock.innerHTML === "") {
                    textblock.innerHTML = "Class Based Component";
                } else {
                    textblock.innerHTML = "";
                }
    }   
 */

    handlerfunc = () => {
        this.setState({showText: !this.state.showText, chnagecolor: !this.state.chnagecolor});
    }

    render() {
        return (
        
            <div>
                <button onClick={this.handlerfunc}>Toggle text</button>
                
                {this.state.showText ?
                <h1 id="textblock" style={{ color: this.state.changecolor ? "blue" : "red" }}>
                    Class Based Component
                </h1>
                : null
                }

                
            </div>

        )
    }
}

export default MyComponent;