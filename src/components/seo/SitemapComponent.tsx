
import React from 'react';
import { Helmet } from 'react-helmet';

const SitemapComponent = () => {
  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      {/* Déclaration explicite du type MIME pour aider les moteurs de recherche */}
      <meta name="format-detection" content="telephone=no" />
      <meta http-equiv="x-ua-compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SitemapComponent;
