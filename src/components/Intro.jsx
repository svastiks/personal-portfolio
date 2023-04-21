import React from 'react'
//import profilepic from '../images/profilepic.JPEG'

const profilepic2 = require('../images/profilepic.png');

export default function Home(){
    return(
        
        <main>
        <div id = "introduction">
            <div className="name">
                Svastik Sharma
            </div>

            <div className="profile-pic">
                <img src = {profilepic2} alt="" />
            </div>

            <div className="profession">
                SWE and Student
            </div>
        </div>
        </main>
    )
}