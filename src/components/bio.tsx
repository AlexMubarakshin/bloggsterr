import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../utils/typography';
import { TSite } from '../types/global';

const useData = (): { site: TSite; avatar: any } => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `);

  return { site: data.site, avatar: data.avatar };
};

const Bio: React.FC = () => {

  const { site: { siteMetadata: { author } }, avatar } = useData();

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2)
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author}
        style={{
          borderRadius: '50%',
          marginBottom: 0,
          marginRight: rhythm(0.5),
          minWidth: 100,
          height: 100,
        }}
      />
      <p>
        {author}&apos;s blog.
        <br />
        Frontend Tech Lead at <OutboundLink href="https://citronium.com" rel="noopener noreferrer" target="_blank">Citronium LLC</OutboundLink>.
      </p>
    </div>
  );
};

export default Bio;
