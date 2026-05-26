import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { loginUser } from '../api/auth';
import toast from 'react-hot-toast';
import '../App.css';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      const data = await loginUser(form);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      toast.success('Login successful');
      navigate('/causes');
    } catch (error) {
    toast.error(
  error.response?.data?.message || 'Login failed'
);
    }
  };

  return (
    <div className="page">
      <div className="card auth-page">
        <Navbar />

        <div className="auth-center">
          <div className="auth-card">
            <h1>Login</h1>
            <p>Welcome back to DonateHope.</p>

            <form onSubmit={handleSubmit}>
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

              <button type="submit">Login</button>
            </form>

            <h4>
              New user? <Link to="/register">Register</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;