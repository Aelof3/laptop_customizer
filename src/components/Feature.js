import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOption from './FeatureOption';
import DefaultContext from './context/DefaultContext';

class Feature extends Component {
    static contextType = DefaultContext;

    getOptions = () => {
        return this.props.options.map(item =>{
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureOption 
                    key={itemHash}
                    itemHash={itemHash}
                    item={item}
                    inputName={slugify(this.props.name)}
                    checked={item.name === this.context.selected[this.props.name].name}
                    handleOnChange={e=>this.context.updateFeature(this.props.name,item)}
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