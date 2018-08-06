// import React, { Component } from 'react';
// import $ from 'jquery';

// // import Footer from '../components/Common/Footer';
// // import PageNotFound from "../pages/PageNotFound";

// class MainLayout extends Component {

// //   componentDidUpdate() {
// //     const { location } = this.props;
// //     if(location.hash) {
// //       $('html, body').animate({
// //         scrollTop: $(location.hash).offset().top
// //       }, 800, function(){
// //         // window.location.hash = location.hash;
// //       });
// //     } else {
// //       document.body.scrollTop = 0;
// //       document.documentElement.scrollTop = 0;
// //     }
// //   }

//   render() {
//     return (
//       <div>
//         <NavBar/>
//         {this.props.children}
//       </div>
//     );
//   }
// }
// export default MainLayout;

import React from 'react'
import {Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
 
export default function DefaultLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <NavBar/>
                <MatchedPage {...matchProps} />
            </div>
        )} />
    )
};