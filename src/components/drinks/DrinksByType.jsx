import React from 'react';

export default class DrinksByType extends React.Component {
    componentDidMount() {
        this.props.getDrinksByType(this.props.match.params.type)
    }

    render() {
        return (
            <div>
                {this.props.currentDrinks.map(drink => {
                    return (
                        <div>
                            <img src={drink.strDrinkThumb} />
                            <p>{drink.strDrink}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}