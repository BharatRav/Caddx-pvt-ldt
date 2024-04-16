import React, { useState } from "react";
import CustomButton from "../Shared/CustomButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleInputChange = (e) => {
    console.log(e.target.name, formData[e.target.name]);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#ee6944] flex flex-col gap-4 p-5 text-black rounded-lg hover:shadow-xl duration-300"
    >
      <div>
        <h2 className="text-center font-bold text-3xl">Contact Us</h2>
      </div>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handleInputChange}
        placeholder="Enter your name"
        className={
          "p-2 rounded-lg focus:outline-1 inset-0 ring-offset-0 focus:outline-orange-red"
        }
      />
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={handleInputChange}
        placeholder="Enter your email"
        className={
          "p-2 rounded-lg focus:outline-1 inset-0 ring-offset-0 focus:outline-orange-red"
        }
      />
      <input
        type="text"
        value={formData.name}
        name="phone"
        onChange={handleInputChange}
        placeholder="Enter your phone"
        className={
          "p-2 rounded-lg focus:outline-1 inset-0 ring-offset-0 focus:outline-orange-red"
        }
      />
      <input
        type="text"
        value={formData.name}
        name="subject"
        onChange={handleInputChange}
        placeholder="Enter your subjects"
        className={
          "p-2 rounded-lg focus:outline-1 inset-0 ring-offset-0 focus:outline-orange-red"
        }
      />
      <textarea
        type="message"
        rows={4}
        value={formData.message}
        name="message"
        onChange={handleInputChange}
        placeholder="message us"
        className={
          "p-2 rounded-lg focus:outline-1 inset-0 ring-offset-0 focus:outline-orange-red"
        }
      />
      <CustomButton
        onClick={handleSubmit}
        className="bg-blue-400 text-white w-fit"
        text={"Submit"}
      />
    </form>
  );
};

export default ContactForm;
