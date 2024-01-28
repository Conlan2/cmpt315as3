import React, {useEffect, useState} from "react";

import Email from "../email/email.component";

import './email-sidebar.component.css'

const EmailSidebar = ({ emails, set_displayed}) => {


    return (
        <div className="email_sidebar">
            {emails.map(email => (
                <Email key={email.id} email={email} set_displayed_mail={set_displayed}/>
            ))}
        </div>
)
}

export default EmailSidebar




