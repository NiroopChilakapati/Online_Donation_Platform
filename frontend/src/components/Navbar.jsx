import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const isAdmin =
    user?.email ===
    'chilakapatiniroop1@gmail.com';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo-box">
        <div className="logo-icon">D</div>

        <h1>DonateHope</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/causes">Causes</Link>

        {/* NORMAL USER NAVBAR */}
      {user && !isAdmin && (
      <>
      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/profile">
        Profile
      </Link>

      <Link to="/donations">
        Donations
      </Link>
    </>
  )}

        {/* ADMIN NAVBAR */}
        {isAdmin && (
          <>
            <Link to="/admin">
              Admin
            </Link>

            <Link to="/admin/donations">
                  Donations
            </Link>
          </>
        )}

        {user ? (
          <>
            <span className="user-name">
              Hello, {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;