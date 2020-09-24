import React from 'react';
import Feature from './Feature';

export default function FeatureForm(props){
    const features = Object.keys(props.features).map((feature,idx)=>{
        return <Feature
            name={feature}
            key={`${feature}-${idx}`}
            idx={idx}
            options={props.features[feature]}
            updateFeature={props.updateFeature}
            selected={props.selected}
        />
    });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}