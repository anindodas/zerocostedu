import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = [
    {
      loc: "https://zerocostedu.org/", // URL of the page
      lastmod: new Date().toISOString(), // Last modification date
      changefreq: "daily", // Change frequency
      priority: 1.0, // Priority
    },
    // Add more fields as needed
  ];

  const sitemap = await getServerSideSitemap(ctx, fields);

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(sitemap);
  ctx.res.end();

  return {
    props: {},
  };
};
