import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

interface Items {
  text: string
  href: string
}

const navItems : Items[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  }
]

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        navItems.map((item) => <ActiveLink {...item} key={item.href}/>)
      }
    </nav>
  )
}
