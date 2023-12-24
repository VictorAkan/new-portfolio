import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Projects = React.lazy(() => import("pages/Projects"));
const Home1 = React.lazy(() => import("pages/Home1"));
const MenuOpen = React.lazy(() => import("pages/MenuOpen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menuopen" element={<MenuOpen />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
