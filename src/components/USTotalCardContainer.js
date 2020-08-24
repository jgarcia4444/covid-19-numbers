import React, { Component } from 'react';
import USTotalCard from './USTotalCard';

export default class USTotalCardContainer extends Component {

    state = {
        countryCurrentResults: {}
    }

    componentDidMount() {
        fetch('https://api.covidtracking.com/v1/us/current.json')
            .then(res => res.json())
            .then(data => this.setState({countryCurrentResults: data[0]}))
    }

    render() {
        return (
            <div className="container">
                <h2>
                    US Total Numbers 
                </h2>
                <USTotalCard results={this.state.countryCurrentResults}/>
            </div>
        )
    }

}