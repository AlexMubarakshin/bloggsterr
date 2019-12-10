import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import ThemeSwitch from './theme-switch';

import { TLocation } from '../types/global';
import { config } from '../config';

type HeaderProps = {
  location: TLocation;
}

const Header: React.FC<HeaderProps> = ({ location }: HeaderProps) => {
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2.625rem',
      }}
    >
      {
        (location.pathname === config.pathPrefix) ? (
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'var(--textNormal)',
                textDecoration: 'none',
                fontSize: '1.618rem'
              }}
            >
              {data.site.siteMetadata.title}
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
                {data.site.siteMetadata.title}
              </Link>
            </h3>
          )
      }
      <ThemeSwitch />
    </div>
  );
};

export default Header;
