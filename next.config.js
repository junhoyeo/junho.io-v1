const withSvgr = require('next-plugin-svgr');
const { withPlugins } = require('next-composed-plugins');

module.exports = withPlugins(
  {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  },
  [withSvgr],
);
