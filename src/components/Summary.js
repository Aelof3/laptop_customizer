import React from 'react';
import DefaultContext from './context/DefaultContext';

class Summary extends React.Component {
    static contextType = DefaultContext;
    render(){
        return (
            <div className="summary__option" key={this.props.featureName + '-' + this.props.idx}>
                <div className="summary__option__label">{this.props.featureName} </div>
                <div className="summary__option__value">{this.props.name}</div>
                <div className="summary__option__cost">
                {this.context.USCurrencyFormat.format(this.props.cost)}
                </div>
            </div>
        )
    }
}

export default Summary;