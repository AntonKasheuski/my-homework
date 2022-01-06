import React from 'react'
import {Header} from './Header'
import Routers from './Routers'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <BrowserRouter>

                <Header/>

                <Routers/>

            </BrowserRouter>
        </div>
    )
}

export default HW5
