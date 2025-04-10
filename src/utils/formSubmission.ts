
/**
 * Form submission utilities - barrel file
 * This file exports all form submission related functions from their respective modules
 */

// Export functions from separate modules
export { submitQuoteForm } from "./forms/quoteFormSubmission";
export { submitEstimationForm } from "./forms/estimationFormSubmission";
export { prepareFormWithCSRF } from "./forms/formUtils";
