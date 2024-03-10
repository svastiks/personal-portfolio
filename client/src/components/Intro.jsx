import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
            
            <div className=''>   
               <div className = 'flex justify-center items-center'>
                  <img src='/assets/pfp.jpg' width={200} height={200} style={{borderRadius : '30%'}}></img>
               </div>

               Svastik Sharma
            </div>

         </h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineering and Intern <a href='https://www.thescore.com/' target='_blank'>@theScore</a></p>
         <p className="text-sm max-w-xl mb-6">

            <br />
            <br />
            <br />

            <b>My Program</b>
            <br />
            Bachelor of Engineering - Software Engineering (Big Data)

            <br />
            <br />

            <b>Why do I love my program?</b>
            <br />
            A Bachelor's in Engineering comes with a lot of challenges but I love my program as it introduces me to like minded people and helps me
            develop real world skills for my future.

            <br />
            <br />

            <b>Coop Experience</b>
            <br />
            I have had many rewwarding coop experiences during my coop terms but one stands out would be when I worked on a project from start to finish.
            During that project I learned that things rarely go as planned and you always have to be ready to learn more in order to be successful in a very
            complex real world project.

            <br />
            <br />

            <b>Career Goal?</b>
            <br />

            My main career goal is to stay in tech and eventually be in a position where I can run and accomplissh bigger milestones with my own team.          

            {' '}

         </p>
      </div>
   )
}

export default Intro;