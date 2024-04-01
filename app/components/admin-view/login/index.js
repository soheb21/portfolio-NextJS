'use-client'

import FormController from "../form-view"

const Login = ({ formData, setFormData, handleLogin }) => {
    const controls = [
        {
            name: "username",
            placeholder: "Enter your Gmail",
            type: "email",
            label: "Username"
        },
        {
            name: "password",
            placeholder: "Enter your password",
            type: "password",
            label: "Password"
        },


    ]
    return (
        <div className='w-full'>
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormController controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleLogin()} className='w-fit mt-2 text-white bg-green-500 p-2 hover:bg-green-300 hover:text-black rounded'>Login</button>

            </div>
        </div>
    )
}

export default Login