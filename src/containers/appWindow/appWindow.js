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



function appWindow(props) {

    return (<React.Fragment>

            {props.isAddDataModalOn && <Backdrop />}
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
        isAddDataModalOn : state.isAddDataModalOn
    }
};

export default connect(mapStateToProps, null)(appWindow);

