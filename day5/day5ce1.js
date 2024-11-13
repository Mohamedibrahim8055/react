
import React from 'react'

const Day5ce1 = () => {

  const array = ["React","Skcet","Front_End"];

  try {
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[8])
  }
  catch(err) {
      console.log(err)
  }
  return (
    <>
      {
        array.map((e,i) => <p key={i}>{e}</p>)
      }
    </>
  )
}

export default Day5ce1
