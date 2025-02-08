import React, { createContext } from 'react'

export const DataContext=createContext()

const UserContext = ({children}) => {
    const user={
        name: "Sparsh Jain",
        age: 23,
        occupation: "Software Developer",
        Compant: "IT"
    }
  return (
    <div>
      <DataContext.Provider value={user}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
