import React from 'react'

const FormController = ({ controls, formData, setFormData }) => {

    return (
        <>
            {
                controls.map((item, i) => (
                    <div key={i} className='mb-2'>
                        <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>{item.label}</label>
                        <input
                            type={item?.type || ''}
                            placeholder={item?.placeholder || ''}
                            id={item?.name || ''}
                            name={item?.name || ''}
                            value={formData[item?.name] || ''}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [item?.name]: e.target.value
                                })
                            }}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))
            }
        </>
    )
}

export default FormController