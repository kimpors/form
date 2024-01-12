'use client'

import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import styles from './styles.module.css'

const ThemeChanger = () =>
{
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className={ styles.changer }>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option selected value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </section>
  )
}

export default ThemeChanger;
