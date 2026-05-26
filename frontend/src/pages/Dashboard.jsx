import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="page">
      <div className="card dashboard-page">
        <Navbar />

        <div className="dashboard-header">
          <h1>Welcome, {user?.name}</h1>
          <p>Manage your donations and continue supporting causes.</p>
        </div>

        <div className="dashboard-cards">
          <Link to="/causes" className="dashboard-card">
            <h2>Donate Now</h2>
            <p>Browse causes and make a new donation.</p>
          </Link>

          <Link to="/donations" className="dashboard-card">
            <h2>Donation History</h2>
            <p>View your previous successful donations.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;