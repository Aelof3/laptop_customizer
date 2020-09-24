import React, { Component } from 'react';
import DefaultContext from './context/DefaultContext';

class FeatureOption extends Component {
    static contextType = DefaultContext;
    render(){
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.inputName}
                    checked={this.props.checked}
                    onChange={this.props.handleOnChange}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({this.context.USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        );
    }
}

export default FeatureOption;