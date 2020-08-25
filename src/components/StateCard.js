import React from 'react';

const StateCard = (props) => {
    let recovered = (props.results.recovered ? props.results.recovered : 'n/a')
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
                        <p>{recovered}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="twelve columns">
                        <h5>Mortality Rate</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <p>{props.mortalityRate}%</p>
                        <p>The mortality rate is calculated by taking the total deaths divided by the total positive cases.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default StateCard;