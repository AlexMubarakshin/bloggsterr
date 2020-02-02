
type DisqusConfig = {
  shortname: string;
  config: {
    identifier: string;
    title: string;
  };
};

const disqusConfig = ({ identifier, title }): DisqusConfig => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier, title },
});

export default disqusConfig;
