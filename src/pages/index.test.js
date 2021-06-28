import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index'

jest.mock('../components/layout', () => ({ children }) => <div>{children}</div>)
// jest.mock('../../components/image', () => () => 'Image')
jest.mock('../components/seo', () => () => 'Seo')

const data = {
  site: {
    siteMetadata: {
      title: 'site title',
    },
  },
  allMdx: {
    edges: [
      {
        node: {
          fields: {
            hello: 1,
            slug: 'slug',
          },
          frontmatter: {
            title: 'frontmatter title',
          },
        },
      },
    ],
  },
}

const setupApp = () => render(<IndexPage data={data} />)

describe('The index page ', () => {
  test('renders without crashing', () => {
    setupApp()
  })
})
