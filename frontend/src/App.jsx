import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Causes from './pages/Causes';
import Login from './pages/Login';
import Register from './pages/Register';
import DonationHistory from './pages/DonationHistory';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AddCause from './pages/AddCause';
import ManageCauses from './pages/ManageCauses';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDonations from './pages/AdminDonations';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/causes" element={<Causes />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/donations"
          element={
            <ProtectedRoute>
              <DonationHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-cause"
          element={
            <ProtectedRoute adminOnly={true}>
              <AddCause />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-causes"
          element={
            <ProtectedRoute adminOnly={true}>
              <ManageCauses />
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/donations"
  element={
    <ProtectedRoute adminOnly={true}>
      <AdminDonations />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;