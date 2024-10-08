import { React, useEffect } from "react";
import { Header } from "./header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import NotCreatedPage from "./pages/NotCreatedPage";
import HomePage from "./pages/HomePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default function App() {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<NotCreatedPage />} />
        <Route path="/page2" element={<NotCreatedPage />} />
        <Route path="/page3" element={<NotCreatedPage />} />
        <Route path="/page4" element={<NotCreatedPage />} />
      </Routes>
    </body>
  );
}
