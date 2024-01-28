import React from "react";
import Email from "../email/email.component";

import './email-display.component.css'

const EmailDisplay = ({ email_content}) => {
    let {id, from, address, time, message, subject, tag, read} = email_content

    return (
    <div className = "email_display" >
        <h1>{subject}</h1>
        <h2>{from}</h2>
        <h3>{tag}</h3>
        <p>{message}</p>
        <p>{time}</p>
        <p>{address}</p>
    </div>
    )

}

export default EmailDisplay


