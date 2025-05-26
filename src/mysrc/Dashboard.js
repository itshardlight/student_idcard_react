import React from "react";
import './Dashboard.css';
function Dashboard() {
  return (
    <>
    <div className="webpage">
  <div className="heading row d-flex align-items-center p-3 bg-primary text-white">
    <div className="col-6 text-start">STUDENT CARD HUB</div>
    <div className="col-6 text-end">superadmin</div>
  </div>

  <div className="body bg-danger row" style={{ minHeight: '600px' }}>
    <div className="col-2 bg-light p-3">
      <div className="mb-2 ms-3">Dashboard</div>
      <div className="mb-2 ms-3">All Student Cards</div>
      <hr />
      <div className="mb-2 ms-3">School Management</div>
      <div className="mb-2 ms-3">Manage Schools</div>
      <div className="mb-2 ms-3">Add New School</div>
       <hr />
      <div className="mb-2 ms-3">User Management</div>
      <div className="mb-2 ms-3">Settings</div>
      <div className="mb-2 ms-3">Log Out</div>
    </div>
    
<div className="right-content col-10 p-3">
  <div className="row bg-light align-items-center p-2 ps-4">
    <div className="col ps-3">Dashboard</div>
  </div>
</div>


  </div>
</div>

    </>
  );
}

export default Dashboard;
