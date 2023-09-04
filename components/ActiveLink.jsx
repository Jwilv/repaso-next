import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const style = {
    color : '#0070f3',
}

export const ActiveLink = ({ href, text}) => {

    const { asPath } = useRouter()

  return (
    <Link style={ asPath === href ? style : null} className={style} href={href}>{text}</Link>
  )
}
