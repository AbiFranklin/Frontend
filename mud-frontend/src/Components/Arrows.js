import React, {Component} from 'react';
import {Button} from 'primereact/button'



class Arrows extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
    return (
        <div className="directions">
            <Button label='▲' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='◀' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='▶' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='▼' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={this.props.goSouth}/>
        </div>
    )}
}

export default Arrows;