import React from 'react';

const Banner = ({timeGreeting}) => {
    return (
        <div className="banner">
            <h1>{timeGreeting},welcome to Covid 19 Numbers</h1>
            <p>This website is meant to just showcase the covid 19 numbers as they are.</p>
        </div>
    )
}

export default Banner;