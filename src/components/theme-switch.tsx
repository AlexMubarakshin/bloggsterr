import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Image from 'gatsby-image';

const useIconsData = (): { sun: any; moon: any } => {
  const data = useStaticQuery(graphql`
    query {
      sun: file(relativePath: { eq: "icon-sun.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      moon: file(relativePath: { eq: "icon-moon.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return { sun: data.sun, moon: data.moon };
};


const ThemeSwitch: React.FC = () => {
  const { sun, moon } = useIconsData();

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any): React.ReactElement => {
        const isDark = theme === 'dark';
        const onToggleClick = (): void => toggleTheme(isDark ? 'light' : 'dark');

        return (
          <div onClick={onToggleClick}>
            <Image
              fixed={isDark ? sun.childImageSharp.fixed : moon.childImageSharp.fixed}
              alt={'theme switch'}
              style={{
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                margin: '0',
              }}
            />
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeSwitch;
