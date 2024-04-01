"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/1.png";
import { useRouter } from "next/navigation";

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

const socialIcons = [
    {
        id: "github",
        icon: (
            <FaGithub
                color="rgba(13, 183, 96, 1)"
                className="w-[40px] h-[40px] "
            />
        ),
        link: 'https://github.com/soheb21'
    },

    {
        id: "linkedin",
        icon: (
            <FaLinkedinIn
                color="rgba(13, 183, 96, 1)"
                className="w-[40px] h-[40px] "
            />
        ),
        link: "https://www.linkedin.com/in/shoeb-ansari-871b7320b/"
    },

    {
        id: "instagram",
        icon: (
            <FaInstagram
                color="rgba(13, 183, 96, 1)"
                className="w-[40px] h-[40px] "
            />
        ),
        link: "https://www.instagram.com/itz_shoeb3707"
    },
];

const ClientHomeView = ({ data }) => {
    const Router = useRouter();


    const setVariants = useMemo(() => variants(), []);
    const containerRef = useRef(null);
    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
            <AnimationWrapper>
                <motion.div
                    className={
                        "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    }
                    variants={setVariants}
                >
                    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
                            {data && data.length
                                ? data[0]?.heading
                                    .split(" ")
                                    .map((item, index) => (
                                        <span key={index}
                                            className={`${index === 2 || index === 3
                                                ? "text-green-main"
                                                : "text-[#000]"
                                                }`}
                                        >
                                            {item}{" "}
                                        </span>
                                    ))
                                : null}
                        </h1>
                        <p className="text-[#000] mt-4 mb-8 font-bold">
                            {data && data.length ? data[0]?.summary : null}
                        </p>
                        <motion.div className="flex gap-3 cursor-pointer">
                            {socialIcons.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 360, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 80,
                                        duration: 4,
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                                    onClick={() => Router.push(item.link)}
                                >
                                    {item.icon}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div ref={containerRef} className="flex w-full justify-end">
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            className="w-[400px] h-[400px] relative bg-green-main"
                        >
                            <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
                            <Image
                                src={aiImage}
                                alt="Profile Picture"
                                loading="lazy"
                                layout="responsive"
                                lazyRoot="true"
                                quality={100}
                                height={300}
                                width={300}
                                className="absolute top-[-15px]"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimationWrapper>
        </div>
    )
}

export default ClientHomeView
