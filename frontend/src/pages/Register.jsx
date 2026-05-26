import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { registerUser } from '../api/auth';
import toast from 'react-hot-toast';
import '../App.css';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

      toast.success('Registration successful');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="page">
      <div className="card auth-page">
        <Navbar />

        <div className="auth-center">
          <div className="auth-card">
            <h1>Create Account</h1>
            <p>Join DonateHope and start helping people.</p>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />

              <button type="submit">Register</button>
            </form>

            <h4>
              Already have an account? <Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;