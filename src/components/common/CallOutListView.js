import React, { Component } from 'react'
import "../../styles/callOut.css";


export default class CallOutListView extends Component {
    callbackHandler = () => {

    }
    
    render() {
        const { section, onClick} = this.props;
        return (
            <div className="bd-callout bd-callout-primary" onClick={() => onClick()}>
                <h4 id="asynchronous-methods-and-transitions">Valar Tamil - {section}</h4>
                <p>Sunday 9 Am to 11 Am</p>
            </div>
        )
    }
}
