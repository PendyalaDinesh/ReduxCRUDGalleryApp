import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const LIMIT = 6;
  const API_URL = "https://picsum.photos/v2/list";

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get(`${API_URL}?page=${page}&limit=${LIMIT}`)
      .then(res => {
        setPhotos(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load images");
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <h3>Photo Gallery</h3>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {photos.map(photo => (
          <div className="col-md-4 mb-3" key={photo.id}>
            <div className="card">
              <img
                src={photo.download_url}
                alt={photo.author}
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  {photo.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-secondary mx-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
