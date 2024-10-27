"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import "./Form.css";

interface FormData {
  name: string;
  email: string;
  city: string;
  date: string;
  phone: string;
  company: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    city: "Empoli",
    date: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (
      !formData.email.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    )
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Interrompe l'invio se ci sono errori
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("La risposta non è in formato JSON");
      }

      const data = await response.json();
      if (response.ok) {
        alert("Email inviata con successo!");
      } else {
        console.error("Errore:", data.message);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="form-title uppercase">contattaci</span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="" disabled>
          Your city
        </option>
        <option value="Empoli">Empoli</option>
        {/* Altre opzioni città */}
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <div className="flex items-center w-full">
        <input type="checkbox" id="privacy_policy" required />
        <label htmlFor="privacy_policy">Accept privacy policy</label>
      </div>
      <button className="uppercase my-10 rounded-2xl text-white bg-[#00b0ff] w-1/4 self-center p-3">
        send
      </button>
    </form>
  );
}
