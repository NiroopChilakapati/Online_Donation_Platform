import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "../App.css";

function DonationHistory() {
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

  return (
    <div className="page">
      <div className="card causes-page">
        <Navbar />

        <div className="causes-header">
          <h1>My Donations</h1>
          <p>Your successful donation history.</p>
        </div>

        {loading ? (
          <Loader text="Loading donations..." />
        ) : donations.length === 0 ? (
          <h2 className="loading-text">No donations found</h2>
        ) : (
          <div className="donation-table">
            <table>
              <thead>
                <tr>
                  <th>Cause</th>
                  <th>Amount</th>
                  <th>Payment ID</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((donation) => (
                  <tr key={donation._id}>
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

export default DonationHistory;
