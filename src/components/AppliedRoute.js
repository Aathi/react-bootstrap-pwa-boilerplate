import React from 'react'
import {Route} from 'react-router-dom'
 
export default ({component: MatchedPage, props: authProps, ...rest}) => {
    return (
        <Route {...rest} render={ matchProps => (
            <div>
                <MatchedPage {...matchProps} {...authProps}/>
            </div>
        )} />
    )
};