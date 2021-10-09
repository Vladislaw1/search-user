import React from 'react';
import {Route} from "react-router-dom"

import MainPage from "../../page/MainPage";
import UserPage from "../../page/UserPage";

const Router = () => {
    return (
        <>
            <Route exact path={"/"} component={MainPage}/>
            <Route exact path={"/user/:username"} component={UserPage}/>
        </>
    );
};

export default Router;