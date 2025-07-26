import React, { useState } from "react";
import { addMember } from "../api";
import "./AddMember.css"; // Import CSS

const membershipPrices = {
  Basic: 999,
  Premium: 1999,
  VIP: 2999,
};

const AddMember = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date

  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "Basic",
    price: membershipPrices["Basic"],
    startDate: today, // Default start date is today
    expiryDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
      .toISOString()
      .split("T")[0],
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [gymId, setGymId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "membershipType") {
      setMember({
        ...member,
        membershipType: value,
        price: membershipPrices[value],
      });
    } else if (name === "startDate") {
      const newStartDate = new Date(value);
      const newExpiryDate = new Date(newStartDate.setMonth(newStartDate.getMonth() + 1))
        .toISOString()
        .split("T")[0];

      setMember({ ...member, startDate: value, expiryDate: newExpiryDate });
    } else {
      setMember({ ...member, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setGymId("");

    if (!member.name || !member.email || !member.phone || !member.address) {
      setMessage("❌ All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await addMember(member);
      setMessage("✅ Member added successfully!");
      setGymId(response.gymId);

      setMember({
        name: "",
        email: "",
        phone: "",
        address: "",
        membershipType: "Basic",
        price: membershipPrices["Basic"],
        startDate: today,
        expiryDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
          .toISOString()
          .split("T")[0],
      });
    } catch (error) {
      setMessage("❌ Failed to add member. Check console for errors.");
      console.error("Submission Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="add-member-container">
      <form className="add-member-form" onSubmit={handleSubmit}>
        <h2>🏋️ Add Gym Member</h2>
        {message && <p className="status-message">{message}</p>}
        {gymId && <p className="gym-id">🎟️ Gym ID: <strong>{gymId}</strong></p>}

        <input type="text" name="name" placeholder="Full Name" value={member.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={member.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={member.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={member.address} onChange={handleChange} required />

        <select name="membershipType" value={member.membershipType} onChange={handleChange}>
          <option value="Basic">Basic - ₹999</option>
          <option value="Premium">Premium - ₹1999</option>
          <option value="VIP">VIP - ₹2999</option>
        </select>

        <label>📅 Start Date:</label>
        <input type="date" name="startDate" value={member.startDate} onChange={handleChange} min={today} />

        <label>🔚 Expiry Date:</label>
        <input type="date" name="expiryDate" value={member.expiryDate} readOnly />

        <p className="membership-price">💰 Price: ₹{member.price}</p>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>
    </div>
  );
};

export default AddMember;
