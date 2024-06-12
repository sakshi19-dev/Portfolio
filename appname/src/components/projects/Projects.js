import React from "react"
import Title from "../layouts/Title"
import ProjectCard from "./ProjectCard"
import { projectOne } from "../../assets/index"
import { projectTwo } from "../../assets/index"


const Projects =() => 
    {
        return(
            <section 
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
            >
                <div className="flex justify-center items-center text-center">
                <Title
                des="My Projects"
                />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-14">
                    <ProjectCard
                        title="Linkedin Clone"
                        des="Developed a LinkedIn clone with features like user login, profile management, 
                        and networking. Implemented real-time messaging, job postings, and a news feed 
                        using HTML, CSS, and JavaScript. Focused on creating a smooth user experience 
                        with responsive design."
                        src={projectOne}
                    />

                    <ProjectCard
                        title="Online Voting System"
                        des="Designed and implemented a secure and user-friendly online voting platform
                        enabling users to cast votes electronically.
                        •This online voting system was developed using HTML for structure, CSS for
                        styling, JavaScript for dynamic content, and PHP for server-side processing."
                        src={projectTwo}
                    />
                </div>
            </section>
        )
    }
export default Projects