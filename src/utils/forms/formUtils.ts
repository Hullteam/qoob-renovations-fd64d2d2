
import { prepareFormWithCSRF as generateCSRF } from "../securityUtils";

/**
 * Prepares a form with CSRF protection
 */
export const prepareFormWithCSRF = async (): Promise<string> => {
  return await generateCSRF();
};
