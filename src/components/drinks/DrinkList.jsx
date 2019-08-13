import React from 'react';

export const DrinkList = (props) => {
    return (
        <div>
            {props.drinkTypes.map((type, index) => {
                return <button key={type + index}>{type}</button>
            })}
        </div>
    )
}