// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    // eslint-disable-next-line quotes
    prependData: '@import "main.scss";',
  },
};
