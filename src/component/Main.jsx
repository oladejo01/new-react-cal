import React from 'react'

const Main = (prop) => {
  return (
    <container>
    <div>My name is {prop.name}. I am {prop.age} years old</div>
   <input type="text" name="" id="" onChange={prop.changeName} />
    <button onClick={prop.change} > click here</button>
    </container>
  )
}

export default Main