import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { TSite, TMarkdown, TLocation, TPageContext } from '../types/global';

import ArticleListItem from '../components/article-list-item';
import Bio from '../components/bio';

type IndexPageProps = {
  data: { site: TSite; allMarkdownRemark: TMarkdown };
  location: TLocation;
  pageContext: TPageContext;
}

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}: IndexPageProps) => {
  const articles = edges.filter(edge => !!edge.node.frontmatter.date);

  return (
    <Layout
      location={location}
    >
      <SEO title="Home" />
      <Bio />
      {
        articles.map((article) => (
          <ArticleListItem
            key={article.node.id}
            node={article.node}
          />
        ))
      }
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
