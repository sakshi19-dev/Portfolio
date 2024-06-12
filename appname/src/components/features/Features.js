import React from "react"
import Title from "../layouts/Title"
import Card from "./Card"
import {FaPalette} from "react-icons/fa"
import {FaCode} from "react-icons/fa"
import {FaServer} from "react-icons/fa"


const Features =() => 
    {
        return(
            <section id="features" className="w-full  py-20  border-b-[1px] border-b-black">
                <Title title="Features" des="What I do"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:gap-20">
                    <Card
                        title="Web Development"
                        des="I specialize in full-stack development, crafting complete web applications 
                        by blending front-end and back-end technologies. With expertise in HTML, CSS, JavaScript, 
                        and React for user-friendly interfaces, I also proficiently manage server-side tasks using PHP, 
                        MySQL databases, and RESTful APIs."
                        icon ={<FaCode/>}

                    />

                    
                    <Card
                        title="UI/UX Design"
                      des="I focus on creating visually appealing and intuitive user interfaces, 
                      ensuring that users engage seamlessly with digital products. 
                      By optimizing usability and accessibility, I enhance the overall user experience, 
                      promoting better engagement and satisfaction."
                    icon ={<FaPalette />}
                    />

                    
                    <Card
                        title="Hosting Websites"
                        des="I specialize in hosting websites, managing every aspect from domain 
                        registration to server setup and maintenance.  My goal is to provide clients with reliable hosting 
                        services that guarantee their online presence remains secure and accessible at all times."


                    icon ={<FaServer />}
                    />
                </div>
                

            </section>
        )
    }

export default Features