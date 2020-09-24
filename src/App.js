import React, { Component } from 'react';
import './App.css';
import FeatureForm from './components/FeatureForm';
import Cart from './components/Cart';
import defaults from './modules/Defaults';

export default class App extends Component {
  state = {
    selected: defaults.selected
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureForm
            features={this.props.features}
            updateFeature={this.updateFeature}
            selected={this.state.selected}
          />
          <Cart 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}