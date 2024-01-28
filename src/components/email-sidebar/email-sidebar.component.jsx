import React from "react";

import Email from "../email/email.component";

import './email-sidebar.component.css'

const EmailSidebar = ({ emails }) => (
    <div className="email_sidebar">
        {emails.map(email => (
            <Email key={email.id} email={email} />
        ))}
    </div>
)

export default EmailSidebar




