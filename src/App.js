import { React, useEffect } from "react";
import { Header } from "./header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import NotCreatedPage from "./pages/NotCreatedPage";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMePage";

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
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/page2" element={<NotCreatedPage />} />
        <Route path="/page3" element={<NotCreatedPage />} />
        <Route path="/page4" element={<NotCreatedPage />} />
      </Routes>
    </body>
  );
}
