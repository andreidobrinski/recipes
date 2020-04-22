import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Recipes" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const image = node.frontmatter.image
        return (
          <StyledLink to={node.fields.slug} key={node.fields.slug}>
            {image && <Image fluid={image.childImageSharp.fluid} alt="test" />}
            <h2>{title}</h2>
          </StyledLink>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

const StyledLink = styled(Link)`
  display: grid;
  position: relative;
  box-shadow: none;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  .gatsby-image-wrapper,
  h2 {
    grid-area: 1 / 1;
  }
  h2 {
    color: white;
    z-index: 1;
    margin-top: auto;
    margin-bottom: 0;
    padding: 32px 24px 16px 24px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
