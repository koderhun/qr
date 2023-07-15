import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Layout = (props: Props) => {
  const { children, className } = props
  return <div className={className}>{children}</div>
}

export default Layout
