import Typography from 'typography';
import Theme from 'typography-theme-noriega';

Theme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  },
  'a.anchor': {
    boxShadow: 'none'
  },
  'p code': {
    fontSize: '1rem'
  },
  'li code': {
    fontSize: '1rem'
  },
  p: {
    marginBottom: '1.5rem'
  },
  h2: {
    marginTop: '2.65rem'
  }
});

// Theme.headerFontFamily.unshift('Inter UI');
const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography;

export default typography;