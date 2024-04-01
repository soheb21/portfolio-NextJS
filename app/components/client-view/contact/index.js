'use client'

import { useState } from "react"
import AnimationWrapper from "../animation-wrapper"
import { addData } from "@/app/services"

const ClientContactView = () => {
    const controls = [
        {
            name: "username",
            type: "text",
            placeholder: 'Enter your Name',
            label: "Name"
        },
        {
            name: "email",
            type: "email",
            placeholder: 'Enter your E-mail',
            label: "Email"
        },
        {
            name: "message",
            type: "text",
            placeholder: 'Enter your Message',
            label: "Message"
        }
    ]
    const initialFormData = {
        username: "",
        email: "",
        message: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const handleSave = async (currentTab) => {
        const { username, email, message } = formData;
        if (!username || !email || !message) {
            return alert("Please fill all the Field ")
        }
        const response = await addData(currentTab, formData)
        if (response.sucess) {
            setFormData({
                username: "",
                email: "",
                message: ""
            })
            alert("Thank you for contacting me")
        }

    }
    return (
        <div id="contact" className="max-w-screen-xl shadow-xl mx-auto mb-8 mt-24 sm:mt-10 sm:px-8 px-6 lg:px-16">
            <AnimationWrapper className={'py-6'}>
                <h1 className="leading-[70px] text-center  text-green-main mb-4 text-2xl lg:text-4xl xl:text-5xl font-medium">
                    Contact Me
                </h1>
                <div className="text-gray-500 relative">
                    <div className="container px-5">
                        <div className="w-full">
                            <div className="flex flex-wrap -m-2">
                                {
                                    controls.map((item) => item.name === "message" ? (
                                        <div key={item.name} className="p-2 w-full">
                                            <div className="relative">
                                                <label className="text-sm text-[#000]">{item.label}</label>
                                                <textarea
                                                    className="w-full px-2 border-green-main border-2 bg-white-500 h-32 text-base outline-none text-black-600 leading-6"
                                                    name={item.name}
                                                    value={formData[item.name]}
                                                    type={item.type}
                                                    onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                                                    id={item.name} cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={item.name} className="p-2 w-full">
                                            <div className="relative">
                                                <label className="text-sm text-[#000]">{item.label}</label>
                                                <input
                                                    className="w-full px-2 border-green-main border-2 bg-white-500  text-base outline-none text-black-600 leading-6"
                                                    name={item.name}
                                                    value={formData[item.name]}
                                                    type={item.type}
                                                    onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                                                    id={item.name} cols="30" rows="10" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <button onClick={() => handleSave('Contact')} className="bg-green-500 text-white-500 px-3 py-1 mt-2">Send</button>
                    </div>
                </div>
            </AnimationWrapper>


        </div>
    )
}

export default ClientContactView
