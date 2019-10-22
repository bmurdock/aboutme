import React from 'react';


function BusinessCard(props) {
    return (
        <section className='business-card base-color round'>

            <div>
                <img className="profilePic" src={props.src} alt="Me" />
            </div>
            <div>
                <div className="name">          {props.name}
                </div>
                <div className="jobTitle">{props.jobTitle} - {props.company}</div>
                <div className="location">{props.city}, {props.state}</div>
            </div>
            <div></div>

        </section>
    );
}

export default BusinessCard;