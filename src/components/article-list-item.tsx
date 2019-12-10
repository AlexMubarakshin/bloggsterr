import React from 'react';
import { rhythm } from '../utils/typography';
import { Link } from 'gatsby';

import { TNode } from '../types/global';

type ArticleListItemProps = {
  node: TNode;
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ node }: ArticleListItemProps) => {
  const title = node.frontmatter.title || node.frontmatter.description;
  return (
    <article>
      <header>
        <h3 style={{ marginBottom: rhythm(0.25) }}>
          <Link to={node.frontmatter.path}>{title}</Link>
        </h3>
        <small>{node.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt
          }}
        />
      </section>
    </article>
  );
};

export default ArticleListItem;
