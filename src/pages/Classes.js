import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment'
import {Scholarship} from '../helpers/Icons'
import ToggleSwitch from '../components/common/ToggleSwitch'
import CallOutListView from '../components/common/CallOutListView'

class App extends Component {
    attendanceHandler = (params) => {
        this.props.history.push(`/attendance/class-${params}`)
    }

    render() {
        console.log('------------------------------------');
        console.log(this.props);
        console.log('------------------------------------');
        return (
            <div>
                <main role="main" className="container">
                    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
                        <img
                            className="mr-3"
                            src={Scholarship}
                            alt
                            width={48}
                            height={48}
                        />
                        <div className="lh-100">
                            <h6 className="mb-0 text-white lh-100">All Classes</h6>
                            <small>Year {moment().format("DD/MM/YYYY")}</small>
                        </div>
                    </div>
                    {[...Array(6)].map((_, i) => {
                        return<CallOutListView section={i+1} onClick={() => this.attendanceHandler(i+1)}/>
                    })}

                    {/* <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">
                            Recent updates
                        </h6>
                        <div className="media text-muted pt-3">
                            <img
                                data-src="plcHolder"
                                alt
                                className="mr-2 rounded"
                            />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">Valar Nilai - 5</strong>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus.
                            </p>
                        </div>

                    </div> */}

                </main>
            </div>
        );
    }
}

export default withRouter(App);
