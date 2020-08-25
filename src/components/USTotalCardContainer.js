import React, { Component } from 'react';
import USTotalCard from './USTotalCard';

export default class USTotalCardContainer extends Component {

    state = {
        countryCurrentResults: {},
        mortalityRate: 0
    }

    componentDidMount() {
        fetch('https://api.covidtracking.com/v1/us/current.json')
            .then(res => res.json())
            .then(data => {
                    this.setState({
                        countryCurrentResults: data[0],
                        mortalityRate: this.calculateMortalityRate(data[0].positive, data[0].death)
                    })

                })
    }

    calculateMortalityRate = (positive, deaths) => {
        let rate = (deaths / positive) * 100;
        return rate.toFixed(2)
    }

    render() {
        let lastModified = this.state.countryCurrentResults.lastModified;
        var lastModifiedArray;
        var formattedDate;
        if (lastModified !== undefined) {
            lastModifiedArray = lastModified.split('T');
            let dateTime = lastModifiedArray[0];
            let dateTimeArray = dateTime.split('-')
            formattedDate = dateTimeArray[1] + '/' + dateTimeArray[2] + '/' + dateTimeArray[0];
        }

        return (
            <div className="container number-container">
                <div className="row">
                    <div className="six columns">
                       <h2>
                            US Total Numbers 
                        </h2> 
                    </div>
                    <div className="six columns">
                        <h4>
                            Last Updated: {formattedDate ? formattedDate : "Loading..." }
                        </h4>
                    </div>
                </div>
                
                <USTotalCard results={this.state}/>
            </div>
        )
    }

}