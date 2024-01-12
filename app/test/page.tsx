'use client'

import { FormEvent, useState } from 'react'

const Test = () => 
{
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  async function fileToText(file: File | undefined)
  {
    setText(await file?.text() ?? result);
  }

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
          <textarea rows={ 7 } cols={ 40 } wrap="virtual" value={ text } onChange={ (e) => setText(e.target.value) }></textarea>
          <input type="file" accept='.txt' onChange={ (e) => fileToText(e.target.files?.[0]) }/>
        </p>
        <button type="submit">Send</button>
      </form>
      <section><h2>{ result }</h2></section>
    </article>
  )
}

export default Test
