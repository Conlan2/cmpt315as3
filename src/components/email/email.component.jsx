import React, {useEffect, useState} from "react";

import './email.component.css'

const Email = ({ email, set_displayed_mail, setClickedID, active_state}) => {
    let {id, from, address, time, message, subject, tag, read} = email

    const clicked_mail = () => {
        email.read = "true"
        read = "true"
        setClickedID(id)
        set_displayed_mail(email)
    }

    return (
        <div className={active_state}
             onClick={clicked_mail}>
            <h2>{from}</h2>
            <h3>{subject}</h3>
            <p>{address}</p>
            <p>{time}</p>

        </div>
    )

}

export default Email

