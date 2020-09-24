import React, { Component } from 'react';
import './App.css';
import FeatureForm from './components/FeatureForm';
import Cart from './components/Cart';
import DefaultContext from './components/context/DefaultContext';

class App extends Component {
  static contextType = DefaultContext;
  
  state = {
    selected: this.context.selected
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const contextValue = {
      FEATURES: this.context.FEATURES,
      updateFeature: this.updateFeature,
      selected: this.state.selected,
      USCurrencyFormat: this.context.USCurrencyFormat
    }
    return (
      <DefaultContext.Provider value={contextValue}>
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <FeatureForm />
            <Cart />
          </main>
        </div>
      </DefaultContext.Provider>
    );
  }
}

export default App;