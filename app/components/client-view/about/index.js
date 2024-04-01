'use client'

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper"
import { motion } from "framer-motion"
import Image from "next/image";
import abtImage from "../../../assets/about-image.png";

const ClientAboutView = ({ data }) => {
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
    const headingText = "Why Hire Me For Your Next Project ?"
    return (
        <div id="about" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
            <AnimationWrapper className={"flex flex-col justify-center w-full items-center py-16 sm:py-14 "}>
                <h1 className="mb-4 text-2xl lg:text-4xl xl:text-5xl font-medium">
                    {
                        headingText.split(" ").map((item, ind) => (
                            <span key={ind} className={`${ind === 6 ? "text-green-main" : "text-black-600"}`}>{item}{" "}</span>
                        ))
                    }
                </h1>

                <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 ">
                    <AnimationWrapper>
                        <motion.div variants={setVariants} className=" h-full w-full mx-auto p-4">
                            <Image
                                src={abtImage}
                                layout="responsive"
                                alt="About Image"
                                loading="lazy"
                                height={414}
                                width={508}
                                quality={100}
                            />
                        </motion.div>
                    </AnimationWrapper>
                    <AnimationWrapper className={'flex flex-col  items-center w-full p-4 '}>
                        <motion.div>
                            {
                                data.map((item) => (
                                    <motion.div variants={setVariants} key={item._id} className=" flex flex-col  ">
                                        <p className="my-4 border-b-green-main border-b-2 w-fit py-2 font-semibold">{item?.heading}</p>
                                        {item?.myself.split("!").map((i, ind) =>
                                            <p key={ind} className={`${ind !== 1 ? "text-green-main text-xl" : "text-black-600 text-sm"} `}>{i}</p>
                                        )}
                                        <div className="grid grid-cols-1  gap-4 mt-4 mx-auto w-full">
                                            <div className="flex sm:flex-col flex-row ">
                                                <p className="text-green-main font-medium text-md ">Name: </p>
                                                <p>{item?.name}</p>
                                            </div>
                                            <div className="flex sm:flex-col flex-row ">
                                                <p className="text-green-main font-medium text-md ">Phone: </p>
                                                <p>{item?.phone}</p>
                                            </div>
                                            <div className="flex sm:flex-col flex-row ">
                                                <p className="text-green-main font-medium text-md ">Email: </p>
                                                <p>{item?.email}</p>
                                            </div>

                                        </div>

                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </AnimationWrapper>
                </div>
            </AnimationWrapper >
        </div >
    )
}

export default ClientAboutView
