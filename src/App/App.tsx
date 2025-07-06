import { useState, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ModalCall from "../Components/ModalCall/ModalCall";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";
import Loading from "../utils/Loading/Loading";
const ToursPage = lazy(() => import("../Pages/ToursPage/ToursPage"));
const BlogsPage = lazy(() => import("../Pages/BlogsPage/BlogsPage"));
const ContactPage = lazy(() => import("../Pages/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("../Pages/AboutPage/AboutPage"));
const Tour = lazy(() => import("../Pages/Tour/Tour"));
const BlogPost = lazy(() => import("../Pages/BlogPost/BlogPost"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage/ErrorPage"));
const Main = lazy(() => import("../Pages/Main/Main"));

export default function App() {
  const [openModalCall, setOpenModalCall] = useState(false);

  return (
    <>
      <Header setOpenModalCall={setOpenModalCall} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/blogposts" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
          <Route path="*" element={<ErrorPage />} />
          {/* {directions.map((item) => (
          <Route path={`/tour/${item.id}`} element={<Tour item={item} />} />
        ))} */}
          {/* {blogItems.map((item) => (
          <Route
            path={`/blogpost/${item.id}`}
            element={<BlogPost item={item} />}
          />
        ))} */}
        </Routes>
      </Suspense>
      <Footer />
      <ModalCall
        openModalCall={openModalCall}
        setOpenModalCall={setOpenModalCall}
      />
      <ScrollToTop />
    </>
  );
}
