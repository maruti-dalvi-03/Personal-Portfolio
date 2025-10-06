import React, { useState } from "react";
import axios from "axios";
import "./contact.css"; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
      setResponseMessage(response.data.message || "Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "An error occurred while submitting the form."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" style={{ minHeight: "80vh" }}>
      <h2 className="text-center text-uppercase fw-semibold pt-5" style={{ gap: "7px" }}>
        Get in Touch with Me
      </h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <div className="info-item">
              <h3>LINKEDIN</h3>
              <p>https://www.linkedin.com/in/maruti-dalvi/</p>
            </div>
            <div className="info-item">
              <h3>PHONE NUMBER</h3>
              <p>86xxxxxxx3<br />98xxxxxx63</p>
            </div>
            <div className="info-item">
              <h3>INSTAGRAM</h3>
              <p>maruti-dalvi</p>
            </div>
            <div className="info-item">
              <h3>EMAIL</h3>
              <p>dalvimaruti2816@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
