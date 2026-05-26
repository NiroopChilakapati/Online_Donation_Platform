import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <div className="card dashboard-page">
        <Navbar />

        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome, {user?.name}. Manage DonateHope platform.</p>
        </div>

        <div className="dashboard-cards">
          <Link to="/admin/add-cause" className="dashboard-card">
            <h2>Add Cause</h2>
            <p>Create a new donation cause.</p>
          </Link>

          <Link to="/admin/donations" className="dashboard-card">
            <h2>View Donations</h2>
            <p>Check all donation records.</p>
          </Link>
          <Link to="/admin/manage-causes" className="dashboard-card">
            <h2>Manage Causes</h2>
            <p>Edit or delete existing donation causes.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
