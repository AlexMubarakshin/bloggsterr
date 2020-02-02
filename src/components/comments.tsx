import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { disqusConfig } from '../config';

type CommentsProps = {
  url: string;
  title: string;
  identifier: string;
}

const Comments: React.FC<CommentsProps> = ({ url, title, identifier }: CommentsProps) => {
  return (
    <div>
      <DiscussionEmbed {...disqusConfig({ identifier, title, url })} />
    </div>
  );
};

export default Comments;
