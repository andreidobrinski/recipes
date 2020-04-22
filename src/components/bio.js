import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

const Bio = ({ name, link }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  const postAuthor = name || author.name
  const authorLink = link || `https://twitter.com/${social.twitter}`

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by{' '}
        <a href={authorLink}>
          <strong>{postAuthor}</strong>
        </a>
      </p>
    </div>
  )
}

export default Bio
