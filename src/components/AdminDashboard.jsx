import React, { useState, useEffect } from "react";
import FundManagement from "./FundManagement";
import UserManagement from "./UserManagement.jsx";

export default () => {
  const [status, currentStatus] = useState(null);

  return (
    <div>
      {status !== null ? (
        <div>{status === "fund" ? <FundManagement /> : <UserManagement />}</div>
      ) : (
        <div>
          <h1>Admin Dashboard</h1>
          <p>This is admin's landing page!!!!!</p>
          <p>This by default will be admins fund management page!!!!</p>
          <p>Please develop admin's Fund management features here!!!!!!</p>
          <button onClick={() => currentStatus("fund")}>Fund Management</button>
          <button onClick={() => currentStatus("user")}>User Management</button>
        </div>
      )}
    </div>
  );
};
