import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: ''
  });

  const { name, phone, email, query } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactFormSubmit = () => {
    if (!name || !phone || !email || !query) {
      alert('All fields are required');
      return;
    }
    console.log(formData);
    
    axios.post(`${import.meta.env.VITE_BACKEND}/contact`, formData)
      .then(response => {
        console.log(response.data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="bg-white/60 max-w-2xl mx-auto px-8 py-10 md:px-16 shadow-xl rounded-l-[50px] rounded-r-lg border my-10">
      <h1 className="font-bold text-4xl py-10">Contact Us</h1>
      <div className="space-y-5 mb-10">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="border-b border-yellow-500 focus:outline-none w-full p-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="border-b border-yellow-500 focus:outline-none w-full p-2"
          placeholder="Phone"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          className="border-b border-yellow-500 focus:outline-none w-full p-2"
          placeholder="Email"
        />
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          className="border-b border-yellow-500 focus:outline-none w-full p-2"
          placeholder="Query"
        />
      </div>
      <button
        className="bg-black text-white py-3 px-10 text-lg rounded-lg font-semibold mb-10"
        onClick={handleContactFormSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Contact;
