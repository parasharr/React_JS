import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/parasharr')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

  return (
    <div className='text-center m-5 bg-gray-700 text-white p-4 text-3xl'>
        Github Repositories: {data.public_repos} 
        <img src={data.avatar_url} alt="Git Picture" width={200}/>
    </div>
  )
}

export default Github
