import React from "react";

import './email.component.css'

const Email = ({ email }) => {
    const {id, from, address, time, message, subject, tag, read} = email

    return (
        <div className="email">
            <h2>{from}</h2>
            <h3>{subject}</h3>
            <p>{address}</p>
            <p>{time}</p>

        </div>
    )

}

export default Email

