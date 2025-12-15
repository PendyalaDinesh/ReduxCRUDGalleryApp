import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">ReduxCRUDGalleryApp</Link>
        <div className="navbar-nav"> 
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/redux">Redux</Link>
          <Link className="nav-link" to="/crud">CRUD</Link>
          <Link className="nav-link" to="/gallery">Gallery</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
