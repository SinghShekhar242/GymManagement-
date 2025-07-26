import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./pages/Members";
import GymAttendance from "./pages/Attendance";
import Login from "./home";
import ReceptionistPage from "./pages/Receptionist";
import "./App.css"; // Link to external styles
import AllMembers from "./pages/AllMembers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/allmembers" element={<AllMembers />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/ReceptionistPage" element={<ReceptionistPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/add-members" element={<Members />} />
        <Route path="/attendance" element={<GymAttendance />} />
      </Routes>
    </Router>
  );
};

export default App;
