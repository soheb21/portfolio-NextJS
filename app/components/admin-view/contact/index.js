import React from 'react'

const ContactComponent = ({ data }) => {
  return (
    <div className="bg-[#ffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-10">
        {
          data && data.map((i) => (
            <div className='border-2 shadow-md p-2 m-2 w-full text-lg' key={i._id}>
              <p>Name: {i?.username}</p>
              <p>Email: {i?.email}</p>
              <p>Date: {i?.createdAt.split("T")[0]}</p>
              <p>Message: {i?.message}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ContactComponent