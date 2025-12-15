import React from "react";

export default function Home() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-4 shadow-lg">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-4 fw-bold">Welcome to ReduxCRUDGalleryApp</h1>
          <p className="lead mt-3">
            Discover a professional React project showcasing Redux state management, API integrations, and a responsive photo gallery.
          </p>
          <a href="/about" className="btn btn-light btn-lg mt-4">
            Learn More About This Project
          </a>
        </div>
      </div>
    </div>
  );
}
