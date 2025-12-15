import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoRedux from "./components/TodoRedux";
import CrudAxios from "./components/CrudAxios";
import PhotoGallery from "./components/PhotoGallery";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redux" element={<TodoRedux />} />
          <Route path="/crud" element={<CrudAxios />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}