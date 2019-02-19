import React from 'react';
import classes from './pizzaImage.css';
import PizzaImage from '../../assets/port2.jpg';

const pizzaImage = (props) => (
    <div className={classes.pizzaImage} >
        <img src={PizzaImage} className={classes.pizzaImg} />
    </div>
) ;

export default pizzaImage;