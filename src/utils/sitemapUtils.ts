
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

/**
 * Validates if an XML string is well-formed
 * @param xmlString The XML content to validate
 * @returns Object with validation result and error message if applicable
 */
export const validateXML = (xmlString: string): { isValid: boolean; errorMessage?: string } => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    // Check for parsing errors
    const parserError = xmlDoc.getElementsByTagName("parsererror");
    if (parserError.length > 0) {
      return { 
        isValid: false, 
        errorMessage: parserError[0].textContent || "XML parsing error" 
      };
    }
    
    return { isValid: true };
  } catch (error) {
    return { 
      isValid: false, 
      errorMessage: error instanceof Error ? error.message : "Unknown XML validation error" 
    };
  }
};

/**
 * Verifies that all URLs in the sitemap use the same domain structure
 * @param xmlString The XML content of the sitemap
 * @param expectedDomain The expected domain (e.g. "https://www.qoob-renovations.fr")
 * @returns Object with validation result and inconsistent URLs if applicable
 */
export const verifySitemapDomainConsistency = (
  xmlString: string,
  expectedDomain: string = "https://www.qoob-renovations.fr"
): { isConsistent: boolean; inconsistentUrls: string[] } => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    const urlElements = xmlDoc.getElementsByTagName("loc");
    const inconsistentUrls: string[] = [];
    
    for (let i = 0; i < urlElements.length; i++) {
      const url = urlElements[i].textContent;
      if (url && !url.startsWith(expectedDomain)) {
        inconsistentUrls.push(url);
      }
    }
    
    return {
      isConsistent: inconsistentUrls.length === 0,
      inconsistentUrls
    };
  } catch (error) {
    console.error("Error verifying sitemap domain consistency:", error);
    return {
      isConsistent: false,
      inconsistentUrls: ["Error processing sitemap"]
    };
  }
};
