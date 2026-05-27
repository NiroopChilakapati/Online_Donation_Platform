import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "../App.css";

function Profile() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await fetch(
          `https://online-donation-platform-vnkj.onrender.com/api/donations/user/${user?.id}`,
        );

        const data = await res.json();
        setDonations(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchDonations();
    }
  }, [user?.id]);

  const totalDonated = donations.reduce(
    (sum, donation) => sum + donation.amount,
    0,
  );

  return (
    <div className="page">
      <div className="card profile-page">
        <Navbar />

        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Your donation activity and account details.</p>
        </div>

        {loading ? (
          <Loader text="Loading profile..." />
        ) : (
          <div className="profile-card">
            <div className="profile-info">
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
            </div>

            <div className="profile-stats">
              <div className="profile-stat-box">
                <h3>{donations.length}</h3>
                <p>Total Donations</p>
              </div>

              <div className="profile-stat-box">
                <h3>₹{totalDonated}</h3>
                <p>Total Amount Donated</p>
              </div>
            </div>

            <div className="profile-actions">
              <Link to="/dashboard" className="profile-btn">
                Dashboard
              </Link>

              <Link to="/donations" className="profile-btn">
                Donation History
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
