import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css';

function NotFound() {
  return (
    <div className="page">
      <div className="card auth-page">
        <Navbar />

        <div className="auth-center">
          <div className="auth-card">
            <h1>404</h1>
            <p>Page not found.</p>

            <Link to="/" className="profile-btn">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;