import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Construct your sitemap fields array
  const fields: ISitemapField[] = [
    {
      loc: "https://zerocostedu.org/", // URL of the page
      lastmod: new Date().toISOString(), // Last modification date
      changefreq: "daily", // Change frequency
      priority: 1.0, // Priority
    },
    // Add more fields as needed
  ];

  // Pass the fields array to getServerSideSitemap
  const sitemap = await getServerSideSitemap(fields, ctx); // Corrected argument order

  // Return the sitemap as a response
  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(sitemap);
  ctx.res.end();

  return {
    props: {}, // Return an empty props object as this is a sitemap
  };
};
