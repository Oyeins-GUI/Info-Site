import React from "react";
import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import Github from "../assets/GitHub.png"

export default function Socials() {
    return (
        <div className="social-media-links">
            <a href="https://www.twitter.com/oyeinbomo" target={"_blank"}>
                <img src={Twitter} className='social-imgs img' />
            </a>
            <a href="https://www.facebook.com/oyeinbomo.opuene.3" target={"_blank"}>
                <img src={Facebook} className='social-imgs img' />
            </a>
            <a href="https://www.github.com/Oyeins-GUI" target={"_blank"}>
                <img src={Github} className='social-imgs img' />
            </a>
        </div>
    )
}
