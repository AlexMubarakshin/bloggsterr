import * as React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import sun from '../images/icon-sun.png';
import moon from '../images/icon-moon.png';


const ThemeSwitch: React.FC = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any): React.ReactElement => {
        const isDark = theme === 'dark';
        const onToggleClick = (): void => toggleTheme(isDark ? 'light' : 'dark');

        return (
          <img
            alt={'theme switch'}
            onClick={onToggleClick}
            src={isDark ? sun : moon}
            style={{
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              margin: '0',
            }}
          />
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeSwitch;
