
import React from 'react';
import { Helmet } from 'react-helmet';

const SitemapComponent = () => {
  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SitemapComponent;
