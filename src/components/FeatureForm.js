import React from 'react';
import Feature from './Feature';

class FeatureForm extends React.Component {
    getFeatureList = () => {
        if ( typeof this.props.features !== "object" ) return;

        return Object.keys(this.props.features).map((feature,idx)=>{
            return <Feature
                name={feature}
                key={`${feature}-${idx}`}
                idx={idx}
                options={this.props.features[feature]}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
            />
        });
        
    }
    render(){
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureList()}
            </form>
        )
    }
}

export default FeatureForm;