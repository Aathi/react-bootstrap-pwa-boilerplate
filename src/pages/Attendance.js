import React, { Component } from "react";
import moment from 'moment'
import ToggleSwitch from '../components/common/ToggleSwitch'


import $ from "jquery";
import "../styles/offCanvas.css";
import {Scholarship} from '../helpers/Icons'

const plcHolder =  `https://www.google.fr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjRvKif0trcAhXFzYUKHZbjCUYQjRx6BAgBEAU&url=https%3A%2F%2Fgetsharex.com%2Fbrand-assets%2F&psig=AOvVaw118X9zQffNZ4xBPjcK5FDg&ust=1533721030947325 `

class App extends Component {
    render() {
        return (
            <div>
                <main role="main" className="container">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Students</h6>
                        
                        {[...Array(30)].map((_, i) => {
                            return(
                                <div className="media text-muted pt-3">
                                    <img
                                        data-src="plcHolder"
                                        alt
                                        className="mr-2 rounded"
                                    />
                                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                            <strong className="text-gray-dark">Student {i+1}</strong>
                                            <a href="#">
                                                <ToggleSwitch key={i} isChecked={ true }/>
                                            </a>
                                        </div>
                                        {/* <span className="d-block">@username</span> */}
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="media text-muted pt-3">
                            <img
                                data-src="plcHolder"
                                alt
                                className="mr-2 rounded"
                            />
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <img
                                data-src="plcHolder"
                                alt
                                className="mr-2 rounded"
                            />
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">All suggestions</a>
                        </small> */}
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
