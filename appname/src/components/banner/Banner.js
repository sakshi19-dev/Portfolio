import React from "react"
import { useTypewriter,Cursor } from "react-simple-typewriter"   //import typewriter
import { FaLinkedin,FaGithub } from "react-icons/fa"            // import icons(Website name :- React icon)
import { SiTailwindcss, SiNextdotjs, SiHtml5 , SiJavascript } from "react-icons/si"
import {bannerImg} from "../../assets/index"

const Banner =() => 
    {
        const [text] =useTypewriter({
            words: ["Web Developer." , "PHP Developer." , "Proficient Coder."],
            loop:true,
            typeSpeed:20,
            deleteSpeed:10,
            delaySpeed:2000,
        })
        return(
            <section id="home" className="w-full  pt-10 pb-20 flex flex-col gap-20 lgl:gap-0 lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont">

                <div className=" w-full lgl:w-1/2 flex flex-col gap-20">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                        <h2 className="text-4xl font-bold text-white">
                             Hi, I'm {" "}
                            <span className="text-designColor capitalize">Sakshi Amrutkar</span>
                            
                        </h2>

                        <h2 className="text-3xl font-bold text-white">
                            a 
                            <span> {text} </span>
                            <Cursor
                                cursorBlinking ="false"
                                cursorStyle="|"
                                cursorColor="#ff014f"                       
                            />
                        </h2>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                            I am an experienced web developer with expertise in HTML, CSS, JavaScript, and PHP. 
                            I specialize in creating dynamic and responsive websites and applications, delivering 
                            high-quality solutions that enhance user experiences.
                            Passionate about coding and continuous learning, I excel in both front-end and 
                            back-end development, ensuring projects meet client needs effectively.
                        </p>
                    </div>

                    <div className=" flex  flex-col lgl:flex-row gap-6 lgl:gap-0 justify-between">


                    <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>   
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                        <a href="https://rb.gy/gxl2u" target="_blank">
                            <FaLinkedin />
                        </a>
                        </span>
                        
                        <span className="bannerIcon">
                        <a href="https://rb.gy/ydj77" target="_blank">
                            <FaGithub />
                        </a>
                        </span>
                    </div> 
                    </div>

                    <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Best Skills On
                    </h2>   
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            < SiTailwindcss/>
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                        <span className="bannerIcon">
                            <SiHtml5/>
                        </span>
                        <span className="bannerIcon">
                            <SiJavascript  />
                        </span>
                        
                    </div> 
                    </div>
                    </div>

                </div>

            

                <div className="w-full lgl:w-1/2 flex justify-center items-center">
                    <img className="w-[400px] h-[400px] z-10 lgl:w-[400px] h-[400px] " src={bannerImg} alt="bannerImg"/>
                    <div className="absolute  w-[450px] h-[500px] bg-gradient-to-r 
                    from-[#1e2024]  to-[#202327] shadow-shadowOne flex justify-center items-center">

                    </div>
                </div>
            </section>
        )
    }

export default Banner