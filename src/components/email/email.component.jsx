import React, {useEffect, useState} from "react";

import './email.component.css'

const Email = ({ email, set_displayed_mail}) => {
    let {id, from, address, time, message, subject, tag, read, active} = email
    const clicked_mail = () => {
        set_displayed_mail(email)
    }

    return (
        <div className="email" onClick={clicked_mail} >
            <h2>{from}</h2>
            <h3>{subject}</h3>
            <p>{address}</p>
            <p>{time}</p>

        </div>
    )

}

export default Email

