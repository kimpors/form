'use client'

import { FormEvent, useState } from 'react'

const Login = () =>
{
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [result, setResult] = useState('')

  function login(e: FormEvent) {
    e.preventDefault();

    if (name == "admin" && pass == "admin") {
      setResult("Success");
    } else {
      setResult("Wrong login or password")
    }
  }

  return(
    <article>
      <form onSubmit={ login }>
        <h2>Login</h2>

        <p>
          <label>Nickname</label>
          <input placeholder="admin" required value={ name } onChange={ (e) => setName(e.target.value) }/>
        </p>
        <p>
          <label>Password</label>
          <input type="password" placeholder="admin" required value={ pass } onChange={ (e) => setPass(e.target.value) }/>
        </p>
        <button type="submit">Enter</button>
      </form>
      <section><h2>{ result }</h2></section>
    </article>
  )
}

export default Login
