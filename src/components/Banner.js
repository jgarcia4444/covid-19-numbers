import React from 'react';

const Banner = ({timeGreeting}) => {
    return (
        <div className="banner">
            <h1>{timeGreeting}, welcome to COVID-19 Numbers</h1>
            <p>This Web App is meant to display COVID-19 numbers for the United States. On the second display below the U.S. total numbers you can select a specific state and see the numbers pertaining to that state.</p>
        </div>
    )
}

export default Banner;