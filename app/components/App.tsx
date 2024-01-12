'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react';

interface Props
{
  children: ReactNode;
}

const App = ({ children }:Props) =>
{
  return(
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
