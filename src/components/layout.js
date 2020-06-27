import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const rootPath = `/`
  let header
  const HeaderLink = ({ maxWidth }) => (
    <Link
      style={{
        boxShadow: `none`,
        color: `inherit`,
        display: 'flex',
        alignItems: 'flex-end',
      }}
      to="/"
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        style={{ width: '30%', maxWidth: `${maxWidth}px`, marginRight: '8px' }}
      />
      {title}
    </Link>
  )

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <HeaderLink maxWidth={80} />
      </h1>
    )
  } else {
    header = (
      <h2
        style={{
          marginTop: 0,
        }}
      >
        <HeaderLink maxWidth={40} />
      </h2>
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
        <a href="https://andreidobrinski.com">Made</a> with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        in
        {` `}
        <span role="img" aria-label="canada">
          🇨🇦
        </span>
      </footer>
    </div>
  )
}

export default Layout
