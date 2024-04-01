'use client'

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper"
import { motion } from "framer-motion"
import Image from "next/image";
import abtImage from "../../../assets/2.jpg";
const ClientSkillsView = ({ data }) => {
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
        <div id="skills" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
            <h1 className=" mb-4 text-2xl text-center  text-green-main lg:text-4xl xl:text-5xl font-medium">
                Skills
            </h1>
            <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 ">
                <AnimationWrapper className={'flex items-center w-full p-4 '}>
                    <motion.div className="grid grid-cols-3 gap-4">
                        {
                            data && data[0].skills.split(",").map((item, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.1, whiteSpace: "none" }} variants={setVariants} className="w-full flex  justify-center items-center">
                                    <p className="py-3 text-xs md:text-lg cursor-pointer w-[160px] px-6 border-[2px] border-green-main whitespace-nowrap text-ellipsis overflow-hidden rounded-md" >{item}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </AnimationWrapper>
                <AnimationWrapper>
                    <motion.div variants={setVariants} className=" h-full w-full mx-auto p-4">
                        <Image
                            src={abtImage}
                            layout="responsive"
                            alt="Skills Image"
                            loading="lazy"
                            height={414}
                            width={508}
                            quality={100}
                        />
                    </motion.div>
                </AnimationWrapper>

            </div>

        </div>
    )
}

export default ClientSkillsView
