/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://zerocostedu.org',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
