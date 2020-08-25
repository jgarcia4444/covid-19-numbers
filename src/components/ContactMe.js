import React from 'react';

const ContactMe = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <h2>Contact Me</h2>
                    <p>Send me an email of anything you think would make this site better. Pertaining to showcasing the numbers associated with COVID-19. Along with science based articles related to the Pandemic.</p>
                </div>
            </div>
            <form id="contact-form">
                <input type="hidden" name="contact_number"/>
                <div className="row">
                    
                    <div className="six columns">
                        <label htmlFor="user_name">Name</label>
                        <input className="u-full-width"  id="user_name" type="text" name="user_name" />
                    </div>
                    <div className="six columns">
                        <label htmlFor="user_email">Email</label>
                        <input id="user_email" className="u-full-width"  type="email" name="user_email" />
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="u-full-width" name="message"></textarea>
                    </div>
                    <div className="twelve columns">
                        <input className="button-primary" type="submit" value="Send" />    
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactMe;