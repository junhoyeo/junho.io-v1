const withSvgr = require('next-plugin-svgr');
const { withPlugins } = require('next-composed-plugins');

module.exports = withPlugins(
  {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
  },
  [withSvgr],
);
