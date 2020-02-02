import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { disqusConfig } from '../config';

type CommentsProps = {
  title: string;
  identifier: string;
}

const Comments: React.FC<CommentsProps> = ({ title, identifier }: CommentsProps) => {
  const config = disqusConfig({ identifier, title }) as any;
  return (
    <div>
      <DiscussionEmbed {...config} />
    </div>
  );
};

export default Comments;
