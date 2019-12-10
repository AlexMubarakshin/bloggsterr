import React from 'react';

import { rhythm } from '../utils/typography';
import Header from './header';
import { TLocation } from '../types/global';

type LayoutProps = {
  location: TLocation;
}

const Layout: React.FC<LayoutProps> = ({ children, location }: React.PropsWithChildren<LayoutProps>) => (
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
    <Header location={location} />
    <main>{children}</main>
    <footer
      style={{ marginTop: '4.375rem' }}
    >
      <a href="https://github.com/AlexMubarakshin" target="_blank" rel="noopener noreferrer">github</a>
      {' | '}
      <a href="https://www.instagram.com/alex_killpop" target="_blank" rel="noopener noreferrer">instagram</a>
    </footer>
  </div>
);

export default Layout;
