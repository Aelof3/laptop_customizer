import React, { Component } from 'react';
import { USCurrencyFormat } from '../modules/USCurrencyFormat';

export default class FeatureOption extends Component {
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
                    {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        );
    }
}


