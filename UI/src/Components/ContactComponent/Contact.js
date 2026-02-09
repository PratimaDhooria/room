import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/contact/save",
        form
      );

      if (res.data.success) {
        alert("Message sent successfully!");

        // clear form
        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again!");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We'd love to get in touch and learn more about you. So, send us a
        message and we'll reply as fast as we can.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Contact;
