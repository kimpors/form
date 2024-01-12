'use client'

import { FormEvent, useState } from 'react'

const Home = () => 
{
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState('');


  function solve(e: FormEvent) 
  {
    e.preventDefault();

    const D = Math.pow(b, 2) - 4 * a * c;

    if (D > 0) {
      const x1 = ((-b - Math.sqrt(D)) / (2 * a)).toPrecision(2);
      const x2 = ((-b + Math.sqrt(D)) / (2 * a)).toPrecision(2);

      setResult("X1: " + x1 + ", X2: " + x2)
    } else if (D == 0) {
      const x = (-b / (2 * a)).toPrecision(3);
      setResult("X: " + x)
    } else {
      setResult("Root don't exist")
    }
  }

  return(
    <article>
      <form onSubmit={ solve }>
        <h2>Quadratic equation</h2>

        <p>
          <label>A</label>
          <input type="number" required value={ a } onChange={ (e) => setA(e.target.valueAsNumber) } />
        </p>
        <p>
          <label>B</label>
          <input type="number" required value={ b } onChange={ (e) => setB(e.target.valueAsNumber) }/>
        </p>
        <p>
          <label>C</label>
          <input type="number" required value={ c } onChange={ (e) => setC(e.target.valueAsNumber) } />
        </p>
        <button type="submit">Solve</button>
      </form>

      <section>{ result }</section>
    </article>
  )
}

export default Home
