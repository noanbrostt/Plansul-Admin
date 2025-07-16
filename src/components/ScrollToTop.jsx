import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// recebe uma ref ao SimpleBar
export default function ScrollToTop({ simpleBarRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const sb = simpleBarRef.current;
    if (sb && typeof sb.getScrollElement === "function") {
      // scroll instantâneo pro topo
      sb.getScrollElement().scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, simpleBarRef]);

  return null;
}
