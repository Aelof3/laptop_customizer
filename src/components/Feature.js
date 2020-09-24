import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOption from './FeatureOption';

class Feature extends Component {
    getOptions = () => {
        return this.props.options.map(item =>{
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureOption 
                    key={itemHash}
                    itemHash={itemHash}
                    item={item}
                    inputName={slugify(this.props.name)}
                    checked={item.name === this.props.selected[this.props.name].name}
                    handleOnChange={e=>this.props.updateFeature(this.props.name,item)}
                />
            );
        });
    }
    render(){
        return (
            <fieldset className="feature" key={`${this.props.name}-${this.props.idx}`}>
                <legend className="feature__name">
                    <h3>{this.props.name}</h3>
                </legend>
                {this.getOptions()}
            </fieldset>
        );
    }
}

export default Feature;