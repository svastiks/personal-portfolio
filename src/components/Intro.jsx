import React from 'react'
//import profilepic from '../images/profilepic.JPEG'

const profilepic2 = require('public/images/test.png');


export default function Home() {

    const scroll = (id) =>{
        const element = document.getElementById('experience');
        if(element){
            element.scrollIntoView({ behavior: 'smooth'})
        }
    };

    return (
        <main>
            <div id="introduction" className="row">
                <div className="profile-pic col">
                    <img src={'/images/profilepic.png'} alt='' />
                </div>
                <div className="col">
                <div className="name">
                    Svastik Sharma
                </div>

                <div className="profession">
                    SWE and Student
                </div>

                <div className="about-me">
                    Currently, I am wokring as a Full Stack Developer Intern. I find software development facinating and love to create bug free and
                    scalable software.
                </div>

                </div>

                <button className="expereince" onClick={scroll}>
                    Experience
                </button>

            </div>
        </main>
    )
}