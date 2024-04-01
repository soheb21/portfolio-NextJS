'use client'

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import AnimationWrapper from "../animation-wrapper"


const MyAccordion = ({ name, field, duration, index }) => {
    const [openIndex, setOpenIndex] = useState(0); // Defaulting to the first accordion item open
    const toggleAccordion = (index) => {
        setOpenIndex(index === openIndex ? -1 : index); // Toggle open/close state
    };

    return (
        <>
            <div onClick={() => toggleAccordion(index)} className="flex transition-all ease-in-out bg-orange-100 px-2 py-2 cursor-pointer w-full justify-between">
                <p className="text-xl text-start my-auto font-light">{field}</p>
                <p className=" bg-green-main text-white-500 px-2 py-1">{index === openIndex ? "Close" : "Open"}</p>
            </div>
            {
                index === openIndex && <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="transition-all shadow-lg p-4">
                    <p className="text-2xl text-green-500">{name}</p>
                    <p className="font-medium">{duration}</p>

                </motion.div>
            }

        </>
    )



}
const ClientEducationView = ({ data }) => {
    function variants() {
        return {
            offscreen: {
                y: 150,
                opacity: 0,
            },
            onscreen: ({ duration = 2 } = {}) => ({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration,
                },
            }),
        };
    }
    const setVariants = useMemo(() => variants(), []);
    return (
        <AnimationWrapper>
            <motion.div variants={setVariants} id="education" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
                <h1 className="leading-[70px] mb-4 text-2xl text-center  text-green-main lg:text-4xl xl:text-5xl font-medium">
                    Education
                </h1>
                <div className="flex flex-col gap-4">
                    {
                        data?.map((item, index) => <MyAccordion key={item.Cllg_School_field} index={index} name={item.Cllg_School_name} field={item.Cllg_School_field} duration={item.Cllg_School_Date} />)
                    }
                </div>

            </motion.div>
        </AnimationWrapper>
    )
}

export default ClientEducationView
