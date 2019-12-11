import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../utils/typography';

const Bio: React.FC = () => {
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

  const { author } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
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
