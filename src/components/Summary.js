import React from 'react';
import { USCurrencyFormat } from '../modules/USCurrencyFormat';

export default function Summary(props) {
    return (
        <div className="summary__option" key={props.featureName + '-' + props.idx}>
            <div className="summary__option__label">{props.featureName} </div>
            <div className="summary__option__value">{props.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(props.cost)}
            </div>
        </div>
    )
}
  