
/**
 * Formats a date in the ISO format required for sitemaps
 * @param date Date to format
 * @returns Formatted date string (YYYY-MM-DD)
 */
export const formatSitemapDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Creates a sitemap URL entry compatible with the sitemap XML format
 * @param url The full URL for the sitemap entry
 * @param priority Priority of the page (between 0.0 and 1.0)
 * @param changeFreq How frequently the page is likely to change
 * @param lastMod Last modification date
 * @returns Sitemap URL entry as XML string
 */
export const createSitemapUrlEntry = (
  url: string, 
  priority: number = 0.5,
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly',
  lastMod?: Date
): string => {
  let entry = `
  <url>
    <loc>${url}</loc>`;
  
  if (lastMod) {
    entry += `
    <lastmod>${formatSitemapDate(lastMod)}</lastmod>`;
  }
  
  entry += `
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  
  return entry;
};

/**
 * Tests if the sitemap URL is accessible
 * @param url The URL to test
 * @returns Promise resolving to a boolean indicating if the sitemap is accessible
 */
export const testSitemapAccessibility = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    console.error('Error testing sitemap accessibility:', error);
    return false;
  }
};
