import React from 'react';

const USTotalCard = (props) => {
    return (
        <div className="row">
            <div className="six columns">
                <div className="row">
                    <h5>Total Positive</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.positive}</p>
                    </div>
                </div>
                <div className="row">
                    <h5>Total Test Taken</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.totalTestResults}</p>
                    </div>
                </div>
                <div className="row">
                    <h5>Positive Test Increase</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.positiveIncrease}</p>
                    </div>
                </div>
            </div>
            <div className="six columns">
                <div className="row">
                    <h5>Total Fatalities</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.death}</p>
                    </div>
                </div>
                <div className="row">
                    <h5>Fatality Increase</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.deathIncrease}</p>
                    </div>
                </div>
                <div className="row">
                    <h5>Total Recovered</h5>
                    <div className="twelve columns total-numbers">
                        <p>{props.results.recovered}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default USTotalCard;