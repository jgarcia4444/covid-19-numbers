import React, { Component } from 'react';
import Banner from './Banner';

export default class BannerContainer extends Component {

    state = {
        timeBasedGreeting: ""
    }

    componentDidMount() {
        let date = new Date()
        let hours = date.getHours()
        if (hours < 12) {
            this.setState({
                timeBasedGreeting: "Good Morning "
            })
        } else if (hours < 17) {
            this.setState({
                timeBasedGreeting: "Good Afternoon "
            })
        } else {
            this.setState({
                timeBasedGreeting: "Good Evening "
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Banner timeGreeting={this.state.timeBasedGreeting} />
            </div>
            
        )
    }

}