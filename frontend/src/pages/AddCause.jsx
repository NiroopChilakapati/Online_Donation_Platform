import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import "../App.css";

function AddCause() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    target: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/causes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          target: Number(form.target),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add cause");
      }

      toast.success("Cause added successfully");
      navigate("/causes");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="page">
      <div className="card auth-page">
        <Navbar />

        <div className="auth-center">
          <div className="auth-card add-cause-card">
            <h1>Add Cause</h1>
            <p>Create a new donation campaign.</p>

            <form onSubmit={handleSubmit}>
              <input
                name="title"
                placeholder="Cause Title"
                onChange={handleChange}
                required
              />

              <input
                name="category"
                placeholder="Category"
                onChange={handleChange}
                required
              />

              <input
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
              ></textarea>

              <input
                name="target"
                type="number"
                placeholder="Target Amount"
                onChange={handleChange}
                required
              />

              <button type="submit">Add Cause</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCause;
