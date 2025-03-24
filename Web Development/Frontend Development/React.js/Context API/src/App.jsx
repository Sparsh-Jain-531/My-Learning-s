import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div className='p-4 bg-green-600 text-white'>Context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

