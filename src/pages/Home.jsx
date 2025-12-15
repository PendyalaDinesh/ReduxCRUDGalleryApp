// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-primary text-white rounded-3 shadow-lg">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-4 fw-bold">Welcome </h1>
          <p className="lead mt-3">
            Explore my React projects, Redux examples, API integrations, and optimized photo gallery.
          </p>
          <a href="/about" className="btn btn-light btn-lg mt-3">
            About This Project
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Redux</h5>
              <p className="card-text">
                A fully functional To-Do App demonstrating global state management with Redux.
              </p>
              <a href="/redux" className="btn btn-primary">
                View Redux App
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">CRUD Operations</h5>
              <p className="card-text">
                Fetch, display, and manipulate API data using Axios in real-time.
              </p>
              <a href="/crud" className="btn btn-primary">
                Explore CRUD
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Photo Gallery</h5>
              <p className="card-text">
                A responsive gallery with lazy loading and pagination using public APIs.
              </p>
              <a href="/gallery" className="btn btn-primary">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
