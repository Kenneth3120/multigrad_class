// src/Dashboard.js
import React from "react";

export default function Dashboard({ user }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user.displayName}!</h1>
      <p>This is your dashboard. More features coming soon…</p>
    </div>
  );
}
