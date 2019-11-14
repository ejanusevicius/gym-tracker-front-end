//libs
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//styling
import '../components/userBar/userBar';

//containers
import LoginPage from '../containers/loginPage/loginPage';
import AppWindow from '../containers/appWindow/appWindow';

function Layout(props) {


    let redirector = <Redirect to="/login/" />

    if (props.isAuth) {
        redirector = <Redirect to="/app/dashboard" />;
    }

    return(
        <React.Fragment>

            {redirector}

            <Switch>

            <Route path="/login/" exact
            render={() => <LoginPage changeAuth={props.changeAuthState} />} 
            />

            <Route path="/app/"
            render={() => <AppWindow changeAuth={props.changeAuthState} authState={props.isAuth} urlPath={"/app"} />} 
            />

            <Redirect from="/" to="/login/" />
                
            </Switch>

        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isAddDataModalOn : state.isAddDataModalOn,
        isAuth : state.isAuth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeAuthState: () => dispatch({type:'TOGGLE_AUTH_STATUS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);