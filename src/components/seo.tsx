import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { removeDuplicates } from '../utils/helpers';
import { TSite } from '../types/global';

type SeoProps = {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
}

const useSiteMetadata = (): TSite => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return data.site;
};

const SEO: React.FC<SeoProps> = ({ description, lang, meta, title }: SeoProps) => {
  const site = useSiteMetadata();

  const metaDescription = description || site.siteMetadata.description;

  const metaArray = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ].concat(meta);

  const filtredMeta = removeDuplicates(metaArray, 'name');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={filtredMeta}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};


export default SEO;
