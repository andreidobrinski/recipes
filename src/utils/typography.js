import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const fonts = [
  'Hind',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
]

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'h1, h2, h3, li, footer, a, p': {
      fontFamily: fonts.join(','),
    },
    h3: {
      color: 'rgba(0,0,0,0.8)',
    },
  }
}

Wordpress2016.baseFontSize = '18px'

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
