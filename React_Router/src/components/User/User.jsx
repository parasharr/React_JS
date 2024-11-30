import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className="text-center text-white font-semibold bg-gray-700 p-4 text-[150%]">
      User: {id}
    </div>
  )
}

export default User