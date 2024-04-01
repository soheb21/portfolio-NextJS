import React from 'react'
import FormController from '../form-view'

const AboutComponent = ({ formData, setFormData, handleSave }) => {
  const controls = [
    {
      name: "heading",
      placeholder: "Enter heading Text eg:Full Stack developer",
      type: "text",
      label: "Enter heading Text"
    },
    {
      name: "myself",
      placeholder: "Enter  Myself Text",
      type: "text",
      label: "Enter Myself Text"
    },
    {
      name: "email",
      placeholder: "Enter your Email ",
      type: "email",
      label: "Email"
    },
    {
      name: "name",
      placeholder: "Enter your full name ",
      type: "text",
      label: "Name"
    },
    {
      name: "phone",
      placeholder: "Enter your phn no ",
      type: "number",
      label: "Phone no"
    },

  ]
  return (
    <div className='w-full'>
      <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormController controls={controls} formData={formData} setFormData={setFormData} />
        <button onClick={() => handleSave("About")} className='w-fit mt-2 text-white bg-green-500 p-2 hover:bg-green-300 hover:text-black rounded'>Add Info</button>

      </div>
    </div>
  )
}

export default AboutComponent;