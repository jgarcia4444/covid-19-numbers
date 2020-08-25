import React from 'react';


const Footer = () => {
    return (
        <div className="row" id="footer">
            <div className="four columns u-pull-left">
                Jake Garcia 2020 &copy; 
            </div>
            <div className="four columns u-pull-right">
                <p>Powered By: <a id="api-link" rel="noopener noreferrer" target="_blank" href="https://covidtracking.com/data/api">The COVID Tracking Project</a></p>
            </div>
        </div>
    )
}

export default Footer;