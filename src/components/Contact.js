import React from 'react';

export default function Contact ({id, firstName, lastName, phone, gender}) {
    return(
        <li>
            <div className="name">
                <span className="firstName">{firstName}&emsp;</span>
                <span className="lastName">{lastName}</span>
                <span className="gender"><img src={gender} alt=""></img></span>
                <div className="phone">{phone}</div>
            </div>
        </li>
    )
}