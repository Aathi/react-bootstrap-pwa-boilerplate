import React, { Component } from 'react'
import "../../styles/callOut.css";


export default class CallOutListView extends Component {
    render() {
        const { section } = this.props;
        return (
            <div className="bd-callout bd-callout-primary">
                <h4 id="asynchronous-methods-and-transitions">Valar Tamil - {section}</h4>
                <p>Sunday 9 Am to 11 Am</p>
            </div>
        )
    }
}
