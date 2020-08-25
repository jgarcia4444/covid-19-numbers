import React from 'react';

const Banner = ({timeGreeting}) => {
    return (
        <div className="banner">
            <h1>{timeGreeting}, welcome to COVID-19 Numbers</h1>
            <p>This website is meant to showcase the covid 19 without any bias or political story to go along with the numbers.</p>
        </div>
    )
}

export default Banner;