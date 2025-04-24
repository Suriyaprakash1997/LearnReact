import React, { useState } from 'react'
import useAuthStore from '../store/authStore'

const LoginForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const login = useAuthStore(state => state.login)
  const handleSubmit = (e) => {
    e.preventDefault()
    login({ name, email })
    alert(`Logged in as ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
