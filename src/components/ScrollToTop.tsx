
import { useScrollToTop } from "@/hooks/useScrollToTop";

/**
 * Component that scrolls to the top of the page on route changes
 * This is a "headless" component with no UI that handles scroll behavior
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;
