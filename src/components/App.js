import React, { useState, seEffect } from "react";

import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const mainDiv = {
  color: "orange",
};

const App = () => {
  const [status, currentStatus] = useState(null);

  return (
    <div>
      {status !== null ? (
        <div>{status === "user" ? <UserDashboard /> : <AdminDashboard />}</div>
      ) : (
        <div>
          <h1 style={mainDiv}>SMART SAVINGS</h1>
          <h1>This is landing page!!!</h1>
          <p>Click below button to progress on to the user dashboard!</p>
          <button onClick={() => currentStatus("user")}> User Login</button>
          <button onClick={() => currentStatus("admin")}> Admin Login</button>
        </div>
      )}
    </div>
  );
  // return (
  //   <div>
  //     {status !== null ? (
  //       <div>{status == "option1" ? <Option1 /> : <Option2 />}</div>
  //     ) : (
  //       <div>
  //         <button onClick={() => currentStatus("option1")}> Option 1</button>
  //         <button onClick={() => currentStatus("option2")}> Option 2</button>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default App;
