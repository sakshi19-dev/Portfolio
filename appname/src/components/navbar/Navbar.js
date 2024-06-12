import React, { useState } from "react"
import { Link } from "react-scroll"
import {logo} from "../../assets/index"
import {navLinksdata} from "../../constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar =() => 
    {

        const [showMenu , setShowMenu]=useState(false)
        console.log(showMenu)
        return(
            <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
               <div className="h-20 w-20 rounded-full overflow-hidden">
                    <img src={logo} alt="logo" className="h-full w-full object-cover" />
                </div>
                <div>
                    
                    <ul className="hidden mdl:inline-flex flex items-center gap-6 lgl:gap-10">
                        {
                            navLinksdata.map(({_id , title,link})=>(
                                <li
                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" 
                                key={ _id}>                          
                                        <Link
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                            {title}
                                        </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <span
                    onClick={()=>setShowMenu(!showMenu)}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center 
                    justify-center rounded-full text-designColor cursor-pointer"
                    ><FiMenu/></span>

                    {
                        showMenu && (
                            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900
                            p-4 scrollbar-hide ">
                                <div className="flex flex-col gap-8 py-2 relative">
                                <div>
                                    <img src={logo} alt="logo" className="h-20 w-20 rounded-full overflow-hidden" />
                                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                                    I am an experienced web developer with expertise in HTML, CSS, JavaScript, and PHP. 
                                    I specialize in creating dynamic and responsive websites and applications, delivering 
                                     high-quality solutions that enhance user experiences.
                                    </p>
                                </div>

                                <ul className="flex flex-col gap-4 ">
                                    {
                                        navLinksdata.map((item)=>
                                        (
                                            <li key={item._id}
                                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                            >
                                                <Link
                                                onClick={()=>setShowMenu(false)}
                                                 activeClass="active"
                                                 to={item.link}
                                                 spy={true}
                                                 smooth={true}
                                                 offset={-70}
                                                 duration={500}
                                                >{item.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    find me in
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                    <a href="https://rb.gy/gxl2u" target="_blank">
                                        <FaLinkedin/>
                                    </a>
                                    </span>

                                    <span className="bannerIcon">
                                    <a href="https://rb.gy/ydj77" target="_blank">
                                        <FaGithub/>
                                    </a>
                                    </span>
                                </div>
                            </div>

                                </div>

                                <span
                                onClick={()=>setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300
                                text-2xl cursor-pointer"
                                ><MdClose/></span>


                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

export default Navbar