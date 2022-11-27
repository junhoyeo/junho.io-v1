const withSvgr = require('next-plugin-svgr');
const { withPlugins } = require('next-composed-plugins');

module.exports = withPlugins(
  {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      transpilePackages: ['../dynamic-island'],
    },
    images: {
      dangerouslyAllowSVG: true,
      domains: ['github.com', 'cho.sh', 'cataas.com', 'mzstatic.com'],
    },
  },
  [withSvgr],
);
