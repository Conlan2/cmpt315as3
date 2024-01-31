import React, {useEffect, useState} from "react";

import Email from "../email/email.component";

import './email-sidebar.component.css'

const EmailSidebar = ({ emails, set_displayed}) => {
    const [states, setStates] = useState({})
    const [clickId, setClickedID] = useState("0")


    useEffect(() => {
        const tempState = {}
        for(let i = 0; i < emails.length; i++){
            tempState[emails[i].id] = "email " + emails[i].read
        }
        setStates(tempState)
    }, [emails]);

    // Sets the new active email when a new email is clicked, which sets the click
    // ID to the ID of the email
    useEffect(() => {
        const temp_states = {...states}
        for(let i = 0; i < emails.length; i++){
            temp_states[emails[i].id] = "email " + emails[i].read
        }
        temp_states[clickId] = "email active"
        setStates(temp_states)
    }, [clickId]);

    return (
        <div className="email_sidebar">
            {emails.map(email => (
                <Email key={email.id} email={email}
                       set_displayed_mail={set_displayed}
                        active_state={states[email.id]}
                        setClickedID={setClickedID}
                        />
            ))}
        </div>
)
}

export default EmailSidebar




