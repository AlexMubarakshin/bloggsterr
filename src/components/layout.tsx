import * as React from 'react';

import { rhythm } from '../utils/typography';
import Header from './header';
import { TLocation } from '../types/global';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
      <OutboundLink href="https://www.linkedin.com/in/a1ex-dev" target="_blank" rel="noopener noreferrer">LinkedIn</OutboundLink>
      {' | '}
      <OutboundLink href="https://github.com/AlexMubarakshin" target="_blank" rel="noopener noreferrer">Github</OutboundLink>
      {' | '}
      <OutboundLink href="https://www.instagram.com/alex_killpop" target="_blank" rel="noopener noreferrer">Instagram</OutboundLink>
    </footer>
  </div>
);

export default Layout;
