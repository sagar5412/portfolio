import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const MotionDiv = motion.div;
function skipToContent(event) {
  event.preventDefault();
  const main = document.getElementById("main-content");
  main?.focus({ preventScroll: true });
  main?.scrollIntoView({ behavior: "instant" });
}
function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
    let timer;
    let attempts = 0;
    function findTarget() {
      const target = document.getElementById(
        hash ? hash.slice(1) : "main-content",
      );
      if (
        target &&
        target.closest("[data-route]")?.dataset.route === pathname
      ) {
        if (hash)
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        target.focus({ preventScroll: true });
      } else if (attempts++ < 25) timer = window.setTimeout(findTarget, 80);
    }
    if (key !== "default" || hash) timer = window.setTimeout(findTarget, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);
  return null;
}
export default function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  return (
    <>
      <a className="skip-link" href="#main-content" onClick={skipToContent}>
        Skip to content
      </a>
      <Header />
      <RouteEffects />
      <Suspense
        fallback={
          <div className="container page-loading" role="status">
            <span className="sr-only">Loading page</span>
          </div>
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <MotionDiv
            key={location.pathname}
            data-route={location.pathname}
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduceMotion ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.16 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </MotionDiv>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
