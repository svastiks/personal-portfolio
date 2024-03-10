import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
            
            <div className=''>   
               <div className = 'flex justify-center items-center'>
                  <img src='/assets/pfp.jpg' width={200} height={200} style={{borderRadius : '35%'}}></img>
               </div>

               Svastik Sharma
            </div>

         </h1>
         <p className="text-base md:text-xl mb-3 font-medium">
            Software Engineering Student and Intern 
            <a href='https://www.thescore.com/' target='_blank' style={{ display: 'inline', verticalAlign: 'middle' }}>
            
            @ theScore <img src='/assets/theScore.png' width={100} height={100} style={{ display: 'inline-block', verticalAlign: 'middle' }}></img>

            </a></p>
       
      </div>
   )
}

export default Intro;