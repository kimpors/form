'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
const Nav = () =>
{
  const pathname = usePathname()

  return(
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Math
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/test' ? 'active' : ''}`} href="/test">
            Test
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
