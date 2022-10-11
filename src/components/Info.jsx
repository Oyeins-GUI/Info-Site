import React from "react";
import profile from "../assets/oyeins.jpeg"
import mail from "../assets/Mail.png"

export default function Info() {
    return (
        <div className="info">
            <img src={profile} className='img profile-pic' />
            <h2 className="name">Opuene Oyeinbomo</h2>
            <p className="career">Frontend and BlockChain Developer</p>
            <p className="website">
                <a href="https://reactfacts-oyeins.netlify.app">oyeins.website</a>
            </p>
            <button className="btn">
                <img src={mail} className='email-icon social-imgs img' />
                <p>Email</p>
            </button>
        </div>
    )
}
