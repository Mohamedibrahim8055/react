import React, { useEffect, useState } from 'react'

const Day8ce1 = () => {

    const [message,setMessage] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        console.log("UseEffect Hook is called")
        setTimeout(() => {
            setMessage("Great...This is time to learn about HOOKS")
            setLoading(false)
        },2000)
    })


  return (
    <>
    {
        loading ? 
        <p>Loading...</p> :
        <p>{message}</p>
    }
    </>
  )
}

export default Day8ce1
