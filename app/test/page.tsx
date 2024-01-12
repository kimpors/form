'use client'

import { FormEvent, useState } from 'react'

const Test = () => 
{
  const [result, setResult] = useState('');

  function send(e: FormEvent)
  {
    e.preventDefault();
    setResult("Sended");
  }

  return(
    <article>
      <form onSubmit={ send }>
        <h2>Test</h2>

        <p>
          <label>Question 1</label>
          <select>
            <option selected>Answer 1</option>
            <option>Answer 2</option>
            <option>Answer 3</option>
          </select>
        </p>

        <p>
          <label>Question 2</label>
          <textarea rows={ 7 } cols={ 40 } wrap="virtual"></textarea>
          <input type="file" accept='.txt' />
        </p>
        <button type="submit">Send</button>
      </form>

      <section><h2>{ result }</h2></section>
    </article>
  )
}

export default Test
