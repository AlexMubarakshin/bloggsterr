/* eslint-disable */
const program = require('commander');
const fs = require('fs');

program
  .requiredOption('-n, --gatsby-disqus-name <name>', 'Name for disqus service');

program.parse(process.argv);

const data = `GATSBY_DISQUS_NAME=${program.gatsbyDisqusName}
`;

fs.writeFileSync('./.env', data);

console.log('Config created successfully');
