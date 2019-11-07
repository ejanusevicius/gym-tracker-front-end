import React, { useState } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';


import '../components/userBar/userBar';

import { connect } from 'react-redux';


import LoginPage from '../containers/loginPage/loginPage';

import AppWindow from '../containers/appWindow/appWindow';

function Layout(props) {

    const [isAuth, setisAuth] = useState(false);

    const changeAuth = (isAuth) => {
        //update the auth state
        setisAuth( prevState => isAuth = !prevState );
    };

    let redirector = <Redirect to="/" />

    if (isAuth) {
        redirector = <Redirect to="/app/dashboard" />;
    }

    return(
        <React.Fragment>

            {redirector}

            <Switch>

            <Route path="/" exact
            render={() => <LoginPage changeAuth={changeAuth} />} 
            />;

            <Route path="/app/"
            render={() => <AppWindow changeAuth={changeAuth} authState={isAuth} urlPath={"/app"} />} 
            />
                
            </Switch>

        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isAddDataModalOn : state.isAddDataModalOn
    }
};

export default connect(mapStateToProps, null)(Layout);