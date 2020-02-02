
type DisqusConfig = {
  shortname: string;
  config: {
    url: string;
    identifier: string;
    title: string;
  };
};

const disqusConfig = ({ identifier, title, url }): DisqusConfig => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier, title, url },
});

export default disqusConfig;
