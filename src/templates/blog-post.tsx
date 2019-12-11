import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { TLocation, TSite, TNode, TPageContext, } from '../types/global';

import Bio from '../components/bio';

type TemplateProps = {
  data: { site: TSite; markdownRemark: TNode };
  location: TLocation;
  pageContext: TPageContext;
}

const Template: React.FC<TemplateProps> = ({
  data,
  location,
}: TemplateProps) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      location={location}
    >
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        meta={[
          {
            property: 'og:type',
            content: 'article',
          },
        ]}
      />

      <article className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>

          <div
            className="blog-post-content"
            style={{ marginTop: '1.75rem' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
      <hr />
      <Bio />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
