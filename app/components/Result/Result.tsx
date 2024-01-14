import { ReactNode, useState } from 'react';
import styles from './styles.module.css'

interface Props 
{
  result: string;
  condition: boolean;
}

const Result = ( { result, condition }:Props) =>
{
  if (condition)
  {
    return (
      <article className={ styles.result }>
        <h2>Result</h2>
        <p>{ result }</p>
      </article>
    )
  } else {
    return null;
  }
}

export default Result;
