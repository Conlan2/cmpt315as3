import React, {useEffect, useState} from "react";

import './email.component.css'

const Email = ({ email, set_displayed_mail, setClickedID, active_state}) => {
    let {id, from, address, time, message, subject, tag, read} = email

    // Sets the email to the display when clicked
    const clicked_mail = () => {
        email.read = "true"
        read = "true"
        setClickedID(id)
        set_displayed_mail(email)
    }

    return (
        <div className={active_state}
             onClick={clicked_mail}>
            <h2 className="from">From: {from}</h2>
            <h3 className="subject">Subject: {subject}</h3>
            <div className="lower_grid">
                <p className="address">{address}</p>
                <p className="time">{time}</p>
            </div>


        </div>
    )

}

export default Email

