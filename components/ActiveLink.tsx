import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'

const style: CSSProperties = {
  color: '#0070f3',
}

interface ActiveLinkProps {
  href: string;
  text: string;
}

export const ActiveLink = ({ href, text }: ActiveLinkProps) => {

  const { asPath } = useRouter()

  return (
    <Link
      style={asPath === href ? style : undefined}
      href={href}
    >{text}</Link>
  )
}
