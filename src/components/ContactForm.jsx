import { useState } from "react";

export default function ContactForm() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    } else if (formData.date < today) {
      newErrors.date = "Past dates are not allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted Successfully:", formData);

      // Reset Form
      setFormData({
        name: "",
        email: "",
        date: "",
        message: ""
      });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Form</h2>

      <form className="card p-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="text-danger">{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-danger">{errors.email}</div>
          )}
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label">Date *</label>
          <input
            type="date"
            name="date"
            className="form-control"
            min={today}
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && (
            <div className="text-danger">{errors.date}</div>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
