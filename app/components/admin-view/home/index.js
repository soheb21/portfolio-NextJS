import React from 'react'
import FormController from '../form-view'

const HomeComponent = ({ formData, setFormData, handleSave }) => {

  const controls = [
    {
      name: "heading",
      placeholder: "Enter heading Text",
      type: "text",
      label: "Enter heading Text"
    },
    {
      name: "summary",
      placeholder: "Enter  summary Text",
      type: "text",
      label: "Enter summary Text"
    },


  ]
  return (
    <div className='w-full'>
      <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormController controls={controls} formData={formData} setFormData={setFormData} />
        <button onClick={() => handleSave("Home")} className='w-fit mt-2 text-white bg-green-500 p-2 hover:bg-green-300 hover:text-black rounded'>Add Info</button>

      </div>
    </div>
  )
}

export default HomeComponent