import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/listes">
        Listes
      </Link>
      <Link href="/isr">
        ISR
      </Link>
      <Link href="/cours">
        BTC
      </Link>
    </nav>
  )
}
