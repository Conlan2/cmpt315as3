import React from "react";
import Email from "../email/email.component";

import './email-display.component.css'

const EmailDisplay = ({ email_content}) => {
    let {id, from, address, time, message, subject, tag, read} = email_content

    return (
    <div className = "email_display" >
        <div className="top_content">
            <h1 className="subject_display">{subject}</h1>
            <h2 className="from_display">From: {from}</h2>
        </div>

        <p className="message">{message}</p>
        <div className="bottom_content">
            <p className="time">{time}</p>
            <p className="address">{address}</p>
        </div>
    </div>
    )

}

export default EmailDisplay


