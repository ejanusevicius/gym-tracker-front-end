//libs
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//styling
import './appWindow.css';


//containers
import WeightTracker from '../../containers/weightTracker/weightTracker';
import HomePage from '../../containers/homePage/homePage';

//components
import UserBar from '../../components/userBar/userBar';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import Backdrop from '../../components/backdrop/backdrop';
import AddExerciseModal from '../../components/addExerciseDataModal/addExerciseDataModal';

import ResponsiveNavBar from '../../components/responsiveNavBar/responsiveNavBar';



function appWindow(props) {

    return (<React.Fragment>

            {props.toggleResponsiveNavbar && <Backdrop animation="animated fadeIn faster" onClickFunc="responsiveNavbar" />}
            {props.toggleResponsiveNavbar && <ResponsiveNavBar changeAuth={props.changeAuth} />}

            {props.isAddDataModalOn && <Backdrop animation="animated fadeIn faster" onClickFunc="addExercise" />}
            {props.isAddDataModalOn && <AddExerciseModal />}

            <UserBar changeAuth={props.changeAuth} />
            
                <div className="application">
                    <NavBar />

                    <Switch>
                        <Route path={`${props.urlPath}/dashboard`} render={() => <HomePage />} />

                        <Route path={`${props.urlPath}/weight-tracker`} render={() => <WeightTracker />} />
                    </Switch>
                </div>

            <Footer />

            </React.Fragment>);
}

const mapStateToProps = state => {
    return {
        isAddDataModalOn : state.isAddDataModalOn,
        toggleResponsiveNavbar : state.isResponsiveNavBarOn
    }
};

export default connect(mapStateToProps, null)(appWindow);

