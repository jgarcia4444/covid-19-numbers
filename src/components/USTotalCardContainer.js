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
        return (
            <div className="container">
                <h2>
                    US Total Numbers 
                </h2>
                <USTotalCard results={this.state}/>
            </div>
        )
    }

}