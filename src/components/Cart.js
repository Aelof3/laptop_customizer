import React, { Component } from 'react';
import Summary from './Summary';
import CartTotal from './CartTotal';
import { USCurrencyFormat } from '../modules/USCurrencyFormat';

export default class Cart extends Component {
  getSummaryList = () =>{
    return Object.keys(this.props.selected).map((feature, idx) => {
      return (
        <Summary 
          key={`${feature}-${idx}`}
          idx={idx}
          featureName={feature}
          name={this.props.selected[feature].name}
          cost={this.props.selected[feature].cost}
        />
      );
    });
  }
  getTotal = () => {
      return Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,0);
  }
  render(){
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.getSummaryList()}
        <CartTotal
            total={USCurrencyFormat.format(this.getTotal())}
          />
      </section>
    )
  }
}
