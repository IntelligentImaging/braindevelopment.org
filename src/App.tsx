import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🛠️ React Query tuned for mostly-static content.
// - retries: 1 keeps noise low if user is offline
// - staleTime: 5 minutes prevents refetch-thrashing on navigations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// ✅ Route-level code-splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// 🔥 Prefetch helper
function useIdlePrefetch() {
  useEffect(() => {
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb)
        : setTimeout(cb, 250);

    idle(() => {
      // Prefetch secondary routes (if you add more later, list them here)
      import("./pages/NotFound");

      // If Index internally lazy-loads heavy sections,
      // you can warm them here too (paths must match your lazy() imports)
      // import("@/components/ResearchAreas");
      // import("@/components/Publications");
      // import("@/components/AITools");
    });
  }, []);
}

const App = () => {
  useIdlePrefetch();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={200}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Keep fallback ultra-light to avoid blocking paint */}
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-muted-foreground">
                Loading…
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Add any future routes ABOVE this catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
