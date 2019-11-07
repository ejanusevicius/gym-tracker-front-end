//libs
import React from 'react';

//styling
import classes from './homePage.module.css';

//components
import Header from '../../components/homePage/header/header';
import Card from '../../components/homePage/card/card';



function homePage() {

    return (
        <div className={classes.homeWindow}>

            <Header />

            <div className={classes.dashboard}>

                <Card 
                title={`Days ago was the last time you we're at the gym`}
                number={`3`}/>

                <Card 
                title={`Kilograms was your last measured weight`}
                number={`79`}/>

                <Card 
                title={`Kilograms was your last weight used for squats`}
                number={`140`}
                linkPath={`/app/weight-tracker`}
                linkText={`See your progress`}/>
                
            </div>
            
        </div>
    );
}

export default homePage;