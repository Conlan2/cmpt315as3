import React from "react";
import Email from "../email/email.component";

import './email-display.component.css'

const EmailDisplay = ({ email_content}) => {
    let {id, from, address, time, message, subject, tag, read} = email_content

    return (
    <div className = "email_display" >
        <div className="top_content">
            <h1 className="subject_display">{subject}</h1>
            <h2 className="from_display">{from}</h2>
        </div>

        <p className="message">{message}</p>
        <div className="bottom_content">
            <p className="address_display">{address}</p>
            <p className="time_display">{time}</p>
        </div>
    </div>
    )

}

export default EmailDisplay


