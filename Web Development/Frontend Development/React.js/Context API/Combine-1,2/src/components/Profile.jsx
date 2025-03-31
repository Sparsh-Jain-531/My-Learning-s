import React from 'react'
import { useUser } from '../context/UserContext'

const Profile = () => {
    const {user}=useUser();
    if(!user) return <div>Login First!</div>
  return (
    <div>
      welcome, {user.name}
    </div>
  )
}

export default Profile
