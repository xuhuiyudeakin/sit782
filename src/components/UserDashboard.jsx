import React, { useState, useEffect } from "react";
import NewTransaction from "./NewTransaction";
import FundOptions from "./FundOptions";

export default () => {
  const [status, currentStatus] = useState(null);

  return (
    <div>
      {status !== null ? (
        <div>{status === "new" ? <NewTransaction /> : <FundOptions />}</div>
      ) : (
        <div>
          <h1>User Dashboard</h1>
          <p>This is User's landing page!!</p>
          <p>This by default will be users portfolio page</p>
          <p>Please develop user portfolio features here!!!!!!!</p>
          <button onClick={() => currentStatus("portfolio")}> Portfolio</button>
          <button onClick={() => currentStatus("new")}> New Transaction</button>
          <button onClick={() => currentStatus("fund")}> Fund Options</button>
        </div>
      )}
    </div>
  );
};
