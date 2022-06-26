import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            {/* <div className="max-w-[1000px] px-4">
                <div className="sm:text-right pb-8 pl-4"> 
                    
                 </div>
            </div>  */}
            <div className="max-w-[600px] px-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                <p className="justify-end py-4">
                Hi!, My Name is <span className="font-bold">Fauzan Aji prayoga</span> 
                <br></br>
                <br></br>
                Currently, I'm a Computer Science student from Dian Nuswantoro University. 
                I’m a Software Developer, especially build Native Android Apps and Websites.
                <br></br>
                <br></br>
                Right now i'm currently exploring and learning to build an app.
                In Android Development I usually build apps using kotlin and Web development using PHP or Javascript.
                In Web Development i'm more comfortable in the Backend role, but I can learn anything if world needed. 😉
                <br></br>
                <br></br>
                If you have some project or wanna collaborate with me, don’t hesitate to contact me. 🤙
                </p>
            </div>
        </div>
    </div>
  )
}

export default About