const withMDX = require('@next/mdx')()

module.exports = withMDX({
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['github.com'],
  },
})
