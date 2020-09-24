import React, { Component } from 'react';
import Summary from './Summary';
import CartTotal from './CartTotal';
import DefaultContext from './context/DefaultContext';

class Cart extends Component {
  static contextType = DefaultContext;

  getSummaryList = () =>{
    return Object.keys(this.context.selected).map((feature, idx) => {
      return (
        <Summary 
          key={`${feature}-${idx}`}
          idx={idx}
          featureName={feature}
          name={this.context.selected[feature].name}
          cost={this.context.selected[feature].cost}
        />
      );
    });
  }
  getTotal = () => {
      return Object.keys(this.context.selected).reduce(
        (acc, curr) => acc + this.context.selected[curr].cost,0);
  }
  render(){
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.getSummaryList()}
        <CartTotal
            total={this.context.USCurrencyFormat.format(this.getTotal())}
          />
      </section>
    )
  }
}

export default Cart;