import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ThemeSwitch from './theme-switch';

import { rhythm } from '../utils/typography';

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(27.5),
        padding: `${rhythm(1.7)} ${rhythm(0.85)}`,
        transition: 'color 0.2s ease-out'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.625rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'var(--textNormal)',
              textDecoration: 'none',
            }}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <ThemeSwitch />
      </div>

      <main>{children}</main>
      <footer
        style={{ marginTop: '4.375rem' }}
      >
        <a href="https://github.com/AlexMubarakshin" target="_blank" rel="noopener noreferrer">github</a>
      </footer>
    </div>
  );
};

export default Layout;
