import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import "../App.css";

function ManageCauses() {
  const [causes, setCauses] = useState([]);
  const [editingCause, setEditingCause] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    target: "",
  });

  useEffect(() => {
    async function loadCauses() {
      try {
        const res = await fetch(
          "https://online-donation-platform-vnkj.onrender.com/api/causes",
        );
        const data = await res.json();

        setCauses(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadCauses();
  }, []);

  const fetchCauses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/causes");
      const data = await res.json();

      setCauses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this cause?",
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/causes/${id}`, {
        method: "DELETE",
      });

      toast.success("Cause deleted successfully");
      fetchCauses();
    } catch (error) {
      toast.error("Failed to delete cause");
      console.log(error);
    }
  };

  const handleEdit = (cause) => {
    setEditingCause(cause._id);

    setForm({
      title: cause.title,
      category: cause.category,
      image: cause.image,
      description: cause.description,
      target: cause.target,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:5000/api/causes/${editingCause}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          target: Number(form.target),
        }),
      });

      toast.success("Cause updated successfully");

      setEditingCause(null);

      setForm({
        title: "",
        category: "",
        image: "",
        description: "",
        target: "",
      });

      fetchCauses();
    } catch (error) {
      toast.error("Failed to update cause");
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="card causes-page">
        <Navbar />

        <div className="causes-header">
          <h1>Manage Causes</h1>
          <p>Edit or delete donation causes.</p>
        </div>

        {editingCause && (
          <div className="manage-edit-box">
            <h2>Edit Cause</h2>

            <form onSubmit={handleUpdate}>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                required
              />

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                required
              />

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL"
                required
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                required
              ></textarea>

              <input
                name="target"
                type="number"
                value={form.target}
                onChange={handleChange}
                placeholder="Target Amount"
                required
              />

              <div className="manage-actions">
                <button type="submit">Update Cause</button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditingCause(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="manage-grid">
          {causes.map((cause) => (
            <div className="manage-card" key={cause._id}>
              <img src={cause.image} alt={cause.title} />

              <div className="manage-card-content">
                <h3>{cause.title}</h3>
                <p>{cause.category}</p>

                <h4>
                  ₹{cause.raised} / ₹{cause.target}
                </h4>

                <div className="manage-actions">
                  <button onClick={() => handleEdit(cause)}>Edit</button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(cause._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageCauses;
