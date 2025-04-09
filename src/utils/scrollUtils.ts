
/**
 * Scrolls to an element with the specified ID
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element in pixels
 */
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
};

