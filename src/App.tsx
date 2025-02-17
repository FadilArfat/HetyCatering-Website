import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import Layouts from "@/components/layouts";
import { Preloader } from "@/components/UI";

const HomePage = React.lazy(() => import("@/pages/Homepage"));
const AboutPage = React.lazy(() => import("@/pages/Aboutpage"));
const GalleryPage = React.lazy(() => import("@/pages/GalleryPage"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<AboutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
