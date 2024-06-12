import React, { useState } from "react"
import Title from "../layouts/Title";
import {contactImg} from "../../assets/index";
import { FaLinkedin,FaGithub } from "react-icons/fa"    

const Contact =() => 
    {

        const[username ,setUsername] = useState("");
        const[phonenumber ,setPhoneNumber] = useState("");
        const[email ,setEmail] = useState("");
        const[subject,setSubject] = useState("");
        const[message ,setMessage] = useState("");
        const[errMsg ,setErrMsg] = useState("");
        const[successMsg ,setSuccessMsg] = useState("");


        {/*Email validation */}
        const emailValidation =() =>
            {
                return String(email)
                .toLocaleLowerCase()
                .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
            }

        const handleSend=(e)=>
            {
                e.preventDefault()
                if(username === "")
                    {
                        setErrMsg("Username is Required!")
                        console.log(errMsg)
                    }
                else if(phonenumber === "")
                        {
                            setErrMsg("Phonenumber is Required!")
                            console.log(errMsg)
                        }
                else if(email === "")
                            {
                                setErrMsg("Email is Required!")
                                console.log(errMsg)
                            }
                        
                else if(!emailValidation(email))
                                {
                                    setErrMsg("Give a valid Email!")
                                    console.log(errMsg)
                                }
                else if(subject === "")
                                    {
                                        setErrMsg("Please give your subject")
                                        console.log(errMsg)
                                    }
                else if(message ==="")
                    {
                        setErrMsg("Message is required!");
                    }

                else
                {
                    setSuccessMsg(`Thank you dear ${username}, Your message has been sent Successfully!`);
                    setErrMsg("");
                    setUsername("");
                    setPhoneNumber("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    console.log(username,phonenumber,email,message,subject);
                }
            }
        return (
            <section id="contacts" className="w-full py-20 border-b-[1px] border-b-black">
                <div className="flex justify-center items-center text-center">
                    <Title title="contact" des="CONTACT WITH ME"/>
                </div>

                {/*For Box */}
                <div className="w-full">
                    <div className="w-full h-auto flex flex-col lgl:flex-row  justify-between">
                        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8
                        rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                            <img 
                            className="w-full h-64 object-cover rounded-lg mb-3"
                            src={contactImg} alt="contactImg"/>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl font-bold text-white">Sakshi Amrutkar</h3>
                                <p className="text-lg font-normal text-gray-400">
                                    Web Developer
                                </p>
                                <p className="text-base text-gray-400 tracking-wide">
                                I am a passionate web developer specializing in creating responsive and dynamic web applications 
                                using HTML, CSS, JavaScript, and PHP.
                                </p>

                                <p className="text-base text-gray-400 flex items-center gap-2">
                                    Phone: <span className="text-lightText">+91 9284927390</span>
                                </p>

                                <p className="text-base text-gray-400 flex items-center gap-2">
                                    Email:{" "}
                                    <span className="text-lightText">amrutsakshi19@gmail.com</span>
                                </p>
                            </div>


                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    find me in
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
                        </div>



                        {/*Contact Form */}
                        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                        flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne ">
                            <form className="w-full flex flex-col gap-2 lgl:gap-5  py-2 lgl:py-4">
                                {
                                    errMsg && 
                                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                                    animate-bounce  " >
                                        {errMsg}
                                    </p>
                                }

                                {
                                    successMsg &&
                                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                                    shadow-shadowOne text-center text-green-500 text-base tracking-wide
                                    animate-bounce  ">
                                        {successMsg}
                                    </p>
                                }
                                <div className="w-full flex flex-col lgl:flex-row gap-10">
                                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                        <p className="text-1xl text-gray-400 uppercase tracking-wide">YOUR NAME</p>
                                        <input
                                        onChange={(e)=>setUsername(e.target.value)} value={username}
                                        className={`${errMsg === "Username is Required!" && "outline-designColor"} contactInput`}
                                        type="text"/>
                                    </div>

                                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                        <p 
                                        className="text-1xl text-gray-400 uppercase tracking-wide">phone number</p>
                                        <input
                                        onChange={(e)=>setPhoneNumber(e.target.value)} value={phonenumber}
                                        className={`${errMsg === "Phonenumber is Required!" && "outline-designColor"} contactInput`}
                                        type="text"/>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-4">
                                <p className="text-1xl text-gray-400 uppercase tracking-wide">Email</p>
                                        <input
                                        onChange={(e)=>setEmail(e.target.value)} value={email}
                                        className={`${errMsg === "Email is Required!" && "outline-designColor"} contactInput`}
                                        type="email"/>
                                </div>

                                <div className="w-full flex flex-col gap-4">
                                <p className="text-1xl text-gray-400 uppercase tracking-wide">Subject</p>
                                        <input
                                        onChange={(e)=>setSubject(e.target.value)} value={subject}
                                        className={`${errMsg === "Please give your subject!" && "outline-designColor"} contactInput`}
                                        type="text"/>
                                </div>

                                <div className="w-full flex flex-col gap-4">
                                <p className="text-1xl text-gray-400 uppercase tracking-wide">Message</p>
                                        <textarea
                                        onChange={(e)=>setMessage(e.target.value)} value={message}
                                        className={`${errMsg === "Message is required!" && "outline-designColor"} contactTextarea`}
                                         cols="30" rows="8"></textarea>
                                </div>


                                <div className="w-full">
                                    <button
                                    onClick={handleSend}
                                    className="contactButton"
                                    >Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


export default Contact;