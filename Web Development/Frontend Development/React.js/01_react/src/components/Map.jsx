import React from 'react'
import Card_05 from './Card_05'

const Map = () => {
    const users=[
        {
          "name": "Amit Sharma",
          "city": "New Delhi",
          "age": 28,
          "profession": "Software Engineer"
        },
        {
          "name": "Priya Verma",
          "city": "Mumbai",
          "age": 25,
          "profession": "Data Analyst"
        },
        {
          "name": "Rahul Gupta",
          "city": "Bangalore",
          "age": 30,
          "profession": "Backend Developer"
        },
        {
          "name": "Neha Singh",
          "city": "Hyderabad",
          "age": 27,
          "profession": "UI/UX Designer"
        },
        {
          "name": "Vikram Joshi",
          "city": "Pune",
          "age": 32,
          "profession": "Cloud Architect"
        }
      ]
  return (
    <>
      {users.map((i,idx)=>{
        return (
          <Card_05 key={idx} name={i.name} age={i.age} profession={i.profession} city={i.city}/>
        )
      })}
    </>
  )
}

export default Map
