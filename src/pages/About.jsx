// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About This Project</h2>
      <div className="card p-4 shadow-sm">
        <p>
          This project is a <strong>full-featured React application</strong> that demonstrates modern front-end development concepts using React, Redux, and Bootstrap. 
          It includes multiple interactive pages to showcase different skills:
        </p>

        <ul>
          <li><strong>Home:</strong> A welcoming page that introduces the application.</li>
          <li><strong>About:</strong> Describes the project, its features, and technologies used.</li>
          <li><strong>Redux Example:</strong> A functional To-Do App demonstrating global state management with Redux, including adding tasks, deleting tasks, and marking tasks as completed using checkboxes and buttons.</li>
          <li><strong>CRUD Operations:</strong> Fetches, displays, and manipulates data from an external API (<code>https://jsonplaceholder.typicode.com/</code>) using Axios, implementing real CRUD functionality.</li>
          <li><strong>Photo Gallery:</strong> A responsive gallery displaying images from a public API (<code>https://picsum.photos/v2/list</code>) with pagination, lazy loading, and Bootstrap grid layout.</li>
          <li><strong>Contact Form:</strong> A validated form using controlled components that ensures correct name, email, and future date inputs. Provides error feedback and resets on successful submission.</li>
        </ul>

        <p>
          The application emphasizes routing with React Router, global state management with Redux, clean UI/UX using Bootstrap, real API interactions, optimized performance with lazy loading and pagination, and form validation for reliable user input. 
          Overall, it demonstrates a complete React ecosystem application.
        </p>
      </div>
    </div>
  );
}
