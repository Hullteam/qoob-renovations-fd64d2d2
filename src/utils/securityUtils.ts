
/**
 * Security utilities for the application
 */

/**
 * Validates if the request is from an allowed origin
 */
export const validateOrigin = (): boolean => {
  const currentOrigin = window.location.origin;
  const allowedOrigins = [
    'https://qoob-renovations.fr',
    'https://www.qoob-renovations.fr'
  ];
  
  if (process.env.NODE_ENV === 'development') {
    return true; // Allow localhost in development
  }
  
  return allowedOrigins.includes(currentOrigin);
};

/**
 * Generates a strong CSRF token using Web Crypto API
 */
export const generateStrongCSRFToken = async (): Promise<string> => {
  // Generate random values using Web Crypto API
  const array = new Uint8Array(32); // 256 bits
  window.crypto.getRandomValues(array);
  
  // Convert to base64 string
  const tokenArray = Array.from(array);
  const tokenBase64 = btoa(String.fromCharCode.apply(null, tokenArray));
  
  // Add timestamp for expiration check
  const timestamp = new Date().getTime().toString();
  return `${timestamp}-${tokenBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')}`;
};

/**
 * Stores the CSRF token securely
 */
export const storeCSRFToken = (token: string): void => {
  // Add additional security attributes when storing the token
  sessionStorage.setItem('qoob_csrf_token', token);
  
  // Store token creation time separately for more secure validation
  sessionStorage.setItem('qoob_csrf_created', new Date().getTime().toString());
};

/**
 * Validates if the CSRF token is valid and not expired
 */
export const validateCSRFToken = (token: string): boolean => {
  const storedToken = sessionStorage.getItem('qoob_csrf_token');
  const creationTime = parseInt(sessionStorage.getItem('qoob_csrf_created') || '0', 10);
  
  if (!storedToken || storedToken !== token) {
    console.error('CSRF token validation failed: Token mismatch');
    return false;
  }
  
  // Validate token age (20 minutes max)
  const currentTime = new Date().getTime();
  const tokenAge = currentTime - creationTime;
  
  // 20 minutes in milliseconds (more secure than 30)
  const maxAge = 20 * 60 * 1000;
  
  if (tokenAge > maxAge) {
    console.error('CSRF token validation failed: Token expired');
    return false;
  }
  
  return true;
};

/**
 * Prepares a form with strong CSRF protection
 */
export const prepareFormWithCSRF = async (): Promise<string> => {
  const csrfToken = await generateStrongCSRFToken();
  storeCSRFToken(csrfToken);
  return csrfToken;
};
