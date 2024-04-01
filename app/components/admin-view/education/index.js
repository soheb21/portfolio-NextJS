import React from 'react'
import FormController from '../form-view'

const EducationComponent = ({ formData, setFormData, handleSave, data }) => {
    const controls = [
        {
            name: "Cllg_School_name",
            placeholder: "Enter your college/School Name",
            type: "text",
            label: "Enter your college/School Name"
        },
        {
            name: "Cllg_School_Date",
            placeholder: "Enter your college/School Date",
            type: "text",
            label: "Enter your college/School Date"
        },
        {
            name: "Cllg_School_field",
            placeholder: "eg:B.E,Science etc",
            type: "text",
            label: "Enter your college/School field"
        },


    ]
    return (
        <div className='w-full'>
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    {
                        data && data.map((i) => (
                            <div className='border-2 shadow-md p-2 m-2 w-full text-lg' key={i._id}>
                                <p>Name: {i?.Cllg_School_name}</p>
                                <p>Field: {i?.Cllg_School_field}</p>
                                <p>Date: {i?.Cllg_School_Date}</p>
                            </div>
                        ))
                    }
                </div>
                <FormController controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSave("Education")} className='w-fit mt-2 text-white bg-green-500 p-2 hover:bg-green-300 hover:text-black rounded'>Add Info</button>

            </div>
        </div>
    )
}

export default EducationComponent;