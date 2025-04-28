import React from 'react'
import useAuthStore from '../store/authStore'

const UserProfile = () => {
  const user = useAuthStore(state => state.user)
  console.log("UserProfile rendered")
  return user ? (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Please log in.</p>
  )
}

export default UserProfile
