'use client'

import Image from 'next/image'
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import styles from './styles.module.css'

const ThemeChanger = () =>
{
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(theme != "light");

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  function changeTheme()
  {
    setIsLight(!isLight);
    isLight ? setTheme("light") : setTheme("dark");
  }

  return (
    <section className={ styles.changer }>
      <Image 
        className={ isLight ? styles.light : styles.dark }
        src = "/lightbulb-solid.svg"
        width = { 42 }
        height = { 42 }
        alt = "Lightbulb"
        onClick={ () => changeTheme() }
      />
    </section>
  )
}

export default ThemeChanger;
