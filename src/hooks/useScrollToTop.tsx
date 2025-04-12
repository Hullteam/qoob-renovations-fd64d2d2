
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that scrolls the window to the top whenever the pathname changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Use "instant" instead of "smooth" to avoid visual issues during navigation
    });
  }, [pathname]);
};
