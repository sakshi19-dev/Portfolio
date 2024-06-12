import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full lgl:w-[40%] p-4 mdl:p-8"
        >
            <div>
                <div className="py-6 mdl:py-12 font-titleFont">
                    <h2 className="text-2xl mdl:text-4xl font-bold">Education Quality</h2>
                </div>
                <div className="mt-10 mdl:mt-14 w-full h-[500px] border-l-[6px] border-black border-opacity-30 
                flex flex-col gap-6 mdl:gap-10">
                    <ResumeCard
                        title="SSC (10th)"
                        subtitle="R.B.H. Kanya Vidyalay (2019)"
                        result="95%"
                    />
                    <ResumeCard
                        title="HSC (12th)"
                        subtitle="Kakani College (2019-2021)"
                        result="89%"
                    />
                    <ResumeCard
                        title="Computer Engineering"
                        subtitle="AISSMS COE, Pune (2021-2025)"
                        result="9.29 CGPA (6th sem)"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Education;
