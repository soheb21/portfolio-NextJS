'use client'

import { motion, useScroll } from "framer-motion"
import AnimationWrapper from "../animation-wrapper"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const ClientProjectView = ({ data }) => {
    const Router = useRouter();


    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref })

    return (
        <div id="project" className="max-w-screen-xl shadow-md pb-4 mx-auto mb-8 mt-24 sm:mt-10 sm:px-8 px-6 lg:px-16">
            <AnimationWrapper className={"py-6 sm:py-16  grid place-content-center place-items-center "}>
                <h1 className="leading-[70px] text-center mb-4 text-2xl lg:text-4xl xl:text-5xl font-medium">
                    My <span className="text-green-main">Projects</span>
                </h1>
                <svg
                    id="progress"
                    height={120}
                    width={120}
                    viewBox="0,0,100,100"
                >
                    <circle
                        cx={50}
                        cy={50}
                        r={30}
                        pathLength={1}
                        className="stroke-black-600"
                    />
                    <motion.circle
                        cx={50}
                        cy={50}
                        r={30}
                        pathLength={1}
                        className="stroke-green-main"
                        style={{ pathLength: scrollXProgress }}
                    />
                </svg>


            </AnimationWrapper >
            <AnimationWrapper>
                <ul className="project-wrapper" ref={ref}>
                    {
                        data && data.length ?
                            data.map((item, ind) => (
                                <li key={ind} className="w-full flex items-stretch cursor-pointer">
                                    <div className="relative border-2 border-green-main w-full transition-all rounded-lg flex flex-col " >
                                        <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                                            <div className="flex flex-col order-2 xl:order-1">
                                                <h3 className="text-3xl text-black-600 font-extrabold capitalize">{item.projectName}</h3>
                                                <p className="text-sm mt-2 text-black-500 capitalize font-bold">{item.createdAt.split("T")[0]}</p>
                                                <div className="grid gap-2 mt-5 grid-cols-2 h-full max-h-[200px]">
                                                    {
                                                        item.projectSkills.split(",").map((techItem, index) => (
                                                            <div key={index} className="w-full flex justify-center items-center">
                                                                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[120px] px-6 border-[2px] border-green-500">{techItem}</button>

                                                            </div>))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-4 w-full  justify-center flex gap-2">
                                            <button onClick={() => Router.push(item?.projectLink)} className="p-2 rounded-md text-white-500 font-semibold text-[14px] tracking-widest bg-orange-500 transition-all outline-none">Website</button>
                                            <button onClick={() => Router.push(item?.projectGitHubLink)} className="p-2 rounded-md text-white-500 font-semibold text-[14px] tracking-widest bg-green-main transition-all outline-none">GitHub</button>

                                        </div>
                                    </div>
                                </li>
                            ))
                            : null
                    }
                </ul>
            </AnimationWrapper>
        </div >
    )
}

export default ClientProjectView
