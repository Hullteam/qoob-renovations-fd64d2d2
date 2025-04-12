
import React from 'react';
import { Helmet } from 'react-helmet';

const SitemapComponent = () => {
  return (
    <Helmet>
      <link rel="sitemap" href="https://www.qoob-renovations.fr/sitemap.xml" type="application/xml" title="Sitemap" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.qoob-renovations.fr/" />
    </Helmet>
  );
};

export default SitemapComponent;
