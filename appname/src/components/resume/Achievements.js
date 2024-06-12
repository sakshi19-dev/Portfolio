import React from "react";
import ResumeCard1 from "./ResumeCard1";
import {motion} from "framer-motion"

const Achievements = () => {
    return (
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:.5}}} 
        className="w-full lgl:w-[40%] p-4 mdl:p-8">
            <div>
                <div className="py-6 mdl:py-12 font-titleFont">
                    <h2 className="text-2xl mdl:text-4xl font-bold">Achievements</h2>
                </div>
                <div className="mt-10 mdl:mt-14 w-full h-[400px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-6 mdl:gap-10">
                <ResumeCard1
                        title="SmartIndia Hackathon-SIH 2023"
                        subtitle="Hackathon"
                        des="Participated in SIH 2023 College
                        Level
                        Hackathon"
                    />
                <ResumeCard1
                        title="Avishkar 2023"
                        subtitle=""
                        des="Nominated for Zonal Level
                        Avishkar"
                    />

                </div>
            </div>
        </motion.div>
    );
}

export default Achievements;
