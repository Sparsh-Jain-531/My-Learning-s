import React from 'react'

const Card_05 = ({name,age,profession,city}) => {
  return (
    <div className="m-auto w-72 p-2">
      <h1>name: {name}</h1>
      <p>age: {age}</p>
      <p>profession: {profession}</p>
      <p>city: {city}</p>
    </div>
  )
}

export default Card_05
