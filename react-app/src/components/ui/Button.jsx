import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, href, onClick, type = 'button', variant = 'primary', size = 'md', fullWidth = false, className = '' }) {
  const classes = ['btn', `btn-${variant}`, `btn-${size}`]
  if (fullWidth) classes.push('btn-block')
  if (className) classes.push(className)
  const cls = classes.join(' ')

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
