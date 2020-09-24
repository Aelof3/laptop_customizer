import React from 'react';
import Feature from './Feature';
import DefaultContext from './context/DefaultContext';

class FeatureForm extends React.Component {
    static contextType = DefaultContext;

    getFeatureList = () => {
        if ( typeof this.context.FEATURES !== "object" ) return;
        return Object.keys(this.context.FEATURES).map((feature,idx)=>{
            return <Feature
                name={feature}
                key={`${feature}-${idx}`}
                idx={idx}
                options={this.context.FEATURES[feature]}
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