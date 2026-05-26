import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "../App.css";

function AdminDonations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/donations");
        const data = await res.json();

        setDonations(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="page">
      <div className="card causes-page">
        <Navbar />

        <div className="causes-header">
          <h1>All Donations</h1>
          <p>View all users and donation activity.</p>
        </div>

        {loading ? (
          <Loader text="Loading donations..." />
        ) : (
          <div className="donation-table">
            <table>
              <thead>
                <tr>
                  <th>Donor Name</th>
                  <th>Email</th>
                  <th>Cause</th>
                  <th>Amount</th>
                  <th>Payment ID</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((donation) => (
                  <tr key={donation._id}>
                    <td>{donation.donorName}</td>
                    <td>{donation.donorEmail}</td>
                    <td>{donation.causeId?.title}</td>
                    <td>₹{donation.amount}</td>
                    <td>{donation.paymentId}</td>
                    <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDonations;
