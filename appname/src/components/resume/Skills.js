import React from "react";
import ResumeCard from "./ResumeCard";
import {motion} from "framer-motion"


const Skills = () => {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:.5}}} className="w-full flex flex-col lgl:flex-row gap-80">
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont">
                    <h2 className="text-2xl mdl:text-4xl font-bold">Skills</h2>
                </div>
                <div className="mt-14 w-full flex flex-col gap-6">
                    {/*For HTML5 */}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">HTML5</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    100%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    {/*For CSS*/}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">css</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    {/*For JS*/}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">javascript</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    60%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    {/*For PHP*/}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">PHP</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    {/*For TailwindCSS*/}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">TailwindCSS</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className=" w-full lgl:w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    30%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    {/*For ReactJS*/}
                    <div className="overflow-x-hidden">
                        <p className="text-1xl uppercase font-medium">ReactJS</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                            initial={{x: "-100%" ,opacity:0}}
                            animate={{x:0 ,opacity:1}}
                            transition={{duration:0.5 , delay:0.5}}
                            className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">
                                    50%
                                </span>
                            </motion.span>
                        </span>
                    </div>


                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
