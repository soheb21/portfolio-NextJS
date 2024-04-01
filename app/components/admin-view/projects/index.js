import React from 'react'
import FormController from '../form-view'

const ProjectComponent = ({ formData, setFormData, handleSave, data }) => {
    const controls = [
        {
            name: "projectName",
            placeholder: "Enter your Project Name",
            type: "text",
            label: "Project-Name"
        },
        {
            name: "projectSkills",
            placeholder: "Enter your Project Skills",
            type: "text",
            label: "Project-Skills"
        },
        {
            name: "projectLink",
            placeholder: "Enter your Project link",
            type: "text",
            label: "Project-Link"
        },
        {
            name: "projectGitHubLink",
            placeholder: "Enter your Project Github link",
            type: "text",
            label: "Project-GitHub Link"
        },

    ]
    return (
        <div className='w-full'>
            <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    {
                        data && data.map((i) => (
                            <div className='border-2 shadow-md p-2 m-2 w-full text-lg' key={i._id}>
                                <p>Name: {i?.projectName}</p>
                                <p>Field: {i?.projectSkills}</p>
                                <p>Date: {i?.projectLink}</p>
                                <p>Date: {i?.projectGitHubLink}</p>
                            </div>
                        ))
                    }
                </div>
                <FormController controls={controls} formData={formData} setFormData={setFormData} />
                <button onClick={() => handleSave("Project")} className='w-fit mt-2 text-white bg-green-500 p-2 hover:bg-green-300 hover:text-black rounded'>Add Info</button>

            </div>
        </div>
    )
}

export default ProjectComponent;