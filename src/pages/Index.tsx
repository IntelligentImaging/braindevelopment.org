import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy sections (below-the-fold)
const ResearchAreas = lazy(() => import("@/components/ResearchAreas"));
const AITools       = lazy(() => import("@/components/AITools"));
const Team          = lazy(() => import("@/components/Team"));
const Publications  = lazy(() => import("@/components/Publications"));
const Contact       = lazy(() => import("@/components/Contact"));

// Idle prefetch to warm chunks after first paint
function useIdlePrefetch() {
  useEffect(() => {
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb)
        : setTimeout(cb, 250);

    idle(() => {
      import("@/components/ResearchAreas");
      import("@/components/AITools");
      import("@/components/Team");
      import("@/components/Publications");
      import("@/components/Contact");
    });
  }, []);
}

const Index = () => {
  useIdlePrefetch();

  // null fallbacks = no extra DOM/CSS/JS during initial paint
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <Suspense fallback={null}>
        <ResearchAreas />
      </Suspense>

      <Suspense fallback={null}>
        <AITools />
      </Suspense>

      <Suspense fallback={null}>
        <Team />
      </Suspense>

      <Suspense fallback={null}>
        <Publications />
      </Suspense>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;
