import React from 'react';
import { USCurrencyFormat } from '../modules/USCurrencyFormat';

export default function SummaryTotal(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {props.total}
            </div>
        </div>
    )
}
  