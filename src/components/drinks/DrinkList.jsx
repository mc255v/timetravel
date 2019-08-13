import React from 'react';
import { Link } from 'react-router-dom';

export const DrinkList = (props) => {
    return (
        <div>
            {props.drinkTypes.map((type, index) => {
                return <Link 
                    to={`/drinks/${type}`}
                    key={type + index}>{type}</Link>
            })}
        </div>
    )
}