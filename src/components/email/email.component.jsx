import React, {useEffect, useState} from "react";

import './email.component.css'

const Email = ({ email, set_displayed_mail}) => {
    let {id, from, address, time, message, subject, tag, read, active} = email
    const [colour, setColour] = useState("white")
    const [background_colour, setBackgroundColour] = useState("white")

    useEffect(() => {
        const setNewColours = () => {
            if (active === "true") {
                setBackgroundColour("blue")
                setColour("white")
        } else if (read === "true") {
                setBackgroundColour("grey")
                setColour("black")
            } else {
                setBackgroundColour("white")
                setColour("black")
         }

        }
        setNewColours()

    }, [active]);
    const clicked_mail = () => {
        email.active = "true"
        email.read = "true"
        set_displayed_mail(email)
    }

    return (
        <div className="email" onClick={clicked_mail} style={{color: colour, backgroundColor: background_colour}}>
            <h2>{from}</h2>
            <h3>{subject}</h3>
            <p>{address}</p>
            <p>{time}</p>

        </div>
    )

}

export default Email

