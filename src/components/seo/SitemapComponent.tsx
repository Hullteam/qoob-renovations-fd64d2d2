
import React from 'react';
import { Helmet } from 'react-helmet';

const SitemapComponent = () => {
  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.qoob-renovations.fr/sitemap.xml" />
      {/* Using absolute URL for sitemap to ensure consistency */}
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta httpEquiv="content-type" content="text/xml; charset=UTF-8" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.qoob-renovations.fr/" />
    </Helmet>
  );
};

export default SitemapComponent;
