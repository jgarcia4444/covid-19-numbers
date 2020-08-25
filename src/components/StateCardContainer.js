import React, { Component } from 'react';
import StateCard from './StateCard';

export default class StateCardContainer extends Component {
    constructor() {
        super()

        this.state = {
            selectedState: 'al',
            results: {},
            mortalityRate: 0
        }
    }

    componentDidMount() {
        let stateUrl = 'https://api.covidtracking.com/v1/states/' + this.state.selectedState + '/current.json'
        fetch(stateUrl)
            .then(res => res.json())
            .then(data => this.setState({
                selectedState: this.state.selectedState,
                results: data,
                mortalityRate: this.calculateMortalityRate(data.positive, data.death)
            }))
    }

    calculateMortalityRate = (positive, deaths) => {
        let rate = (deaths / positive) * 100
        return rate.toFixed(2)
    }

    handleOptionChange = (e) => {
        let selectedState = e.target.value
        let stateUrl = 'https://api.covidtracking.com/v1/states/' + selectedState +'/current.json'
        fetch(stateUrl)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    selectedState: selectedState,
                    results: data,
                    mortalityRate: this.calculateMortalityRate(data.positive, data.death)
                })
            })
    }

    render() {
        const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
        return (
            <div className="container">
                <h2>{this.state.selectedState.toUpperCase()} Total Numbers</h2>
                <div className="row">
                    <div className="three columns">
                       <label htmlFor="stateSelection">Select a State</label> 
                       <select onChange={e => this.handleOptionChange(e)} className="u-full-width" id="stateSelection">
                            {states.map(stateCode => <option  key={stateCode} value={stateCode.toLowerCase()}>{stateCode}</option>)}
                       </select>
                    </div>
                </div>
                <StateCard results={this.state.results} mortalityRate={this.state.mortalityRate} />
            </div>
        )
    }

}