import { useState } from "react";
import { createOrder } from "../api/payment";
import { saveDonation } from "../api/donations";
import toast from "react-hot-toast";

function CauseCard({ cause }) {
  const [amount, setAmount] = useState("");

  const percentage = Math.min((cause.raised / cause.target) * 100, 100);

  const handleDonate = async () => {
    try {
      const donationAmount = Number(amount);

      if (!donationAmount || donationAmount < 1) {
        toast.error("Please enter a valid donation amount");
        return;
      }

      const user = JSON.parse(localStorage.getItem("user"));

      const order = await createOrder(donationAmount);

      const options = {
        key: "rzp_test_Sr9AqBURtZjt1d",
        amount: order.amount,
        currency: order.currency,
        name: "DonateHope",
        description: cause.title,
        order_id: order.id,

        handler: async function (response) {
          await saveDonation({
            causeId: cause._id,
            userId: user?.id,
            donorName: user?.name || "Guest Donor",
            donorEmail: user?.email || "guest@example.com",
            amount: donationAmount,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
          });

          toast.success(`Donation successful ❤️ ₹${donationAmount}`);
          window.location.reload();
        },

        theme: {
          color: "#eb469b",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log(error);
      toast.error("Donation failed");
    }
  };

  return (
    <div className="cause-card">
      <img src={cause.image} alt={cause.title} />

      <div className="cause-content">
        <span>{cause.category}</span>

        <h3>{cause.title}</h3>

        <p>{cause.description}</p>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${percentage}%` }}></div>
        </div>

        <div className="amounts">
          <h4>₹{cause.raised}</h4>
          <h5>Goal ₹{cause.target}</h5>
        </div>

        <input
          className="donation-input"
          type="number"
          placeholder="Enter amount ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleDonate}>Donate Now</button>
      </div>
    </div>
  );
}

export default CauseCard;
