import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import ThemeSwitch from './theme-switch';

import { TLocation, TSite } from '../types/global';

type HeaderProps = {
  location: TLocation;
}

const useSiteMetadata = (): TSite => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site(pathPrefix: {}) {
        pathPrefix
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site;
};

const Header: React.FC<HeaderProps> = ({ location, }: HeaderProps) => {
  const { siteMetadata: { title }, pathPrefix } = useSiteMetadata();

  const isHomePage = location.pathname === pathPrefix;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2.625rem',
      }}
    >
      {
        (isHomePage) ?
          (
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'var(--textNormal)',
                  textDecoration: 'none',
                  fontSize: '1.618rem'
                }}
              >
                {title}
              </Link>
            </h1>
          )
          :
          (
            <h3 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'var(--textLink)',
                  fontSize: '1.618rem'
                }}
              >
                {title}
              </Link>
            </h3>
          )
      }

      <ThemeSwitch />
    </div>
  );
};

export default Header;
