import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ textAlign: 'end', marginTop: '40px' }}>
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by
        {` `}
        <a href="https://andreidobrinski.com">Andrei Dobrinski</a>
      </footer>
    </div>
  )
}

export default Layout
