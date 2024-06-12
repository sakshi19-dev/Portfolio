import React from "react";
import ResumeCard1 from "./ResumeCard1";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full lg:w-[40%] p-4 md:p-8"
        >
            <div>
                <div className="py-6 md:py-12 font-titleFont">
                    <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
                </div>
                <div className="mt-10 lg:mt-14 w-full lg:h-[300px] border-l-[6px] border-black border-opacity-30 flex flex-col lg:flex-row gap-6 md:gap-10">
                    <ResumeCard1
                        title="BOOST STAR Experts"
                        subtitle="Web Development Internship (01/2024 – 03/2024)"
                        des="Working with teams to build user-friendly websites. Learning and applying HTML, CSS, and JavaScript to create attractive interfaces. Contributing to projects that improve user experiences."
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;
