import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/ReceptionistPage.css"; // Import the enhanced CSS

const ReceptionistPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Moved Here */}
      <nav className="navbar">
        <div className="nav-logo">🏋️‍♂️ GymPro</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="ReceptionistPage">Receptionist</Link>
          <Link to="/add-members">Members</Link>
          <Link to="/attendance">Attendance</Link>
        </div>
      </nav>

      {/* Receptionist Panel UI */}
      <div className="receptionist-container">
        <div className="glass-box">
          <h1 className="title">Receptionist Panel</h1>
          <div className="button-grid">
            <button onClick={() => navigate("/add-members")}>Add Member</button>

            <button onClick={() => navigate("/attendance")}>Attendance</button>
            <button onClick={() => navigate("/AllMembers")}>View Member Details</button>
            <button onClick={() => navigate("/gym-trainer")}>Gym Trainer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceptionistPage;
