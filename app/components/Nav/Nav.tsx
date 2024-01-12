'use client'
 
import { usePathname } from 'next/navigation'
import styles from  './styles.module.css'
import Link from 'next/link'
 
const Nav = () =>
{
  const pathname = usePathname()

  return(
    <nav className={ styles.nav }>
      <Link className={ pathname === '/' ? styles.active : '' } href="/">
        Math
      </Link>
      <Link className={ pathname === '/login' ? styles.active : '' } href="/login">
        Login
      </Link>
      <Link className={ pathname === '/test' ? styles.active : '' } href="/test">
        Test
      </Link>
    </nav>
  )
}

export default Nav
