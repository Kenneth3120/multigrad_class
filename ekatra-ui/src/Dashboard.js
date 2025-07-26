import React, { useState } from 'react';
import AskAgent from "./AskAgent";

const Dashboard = ({ user }) => {
  const [screen, setScreen] = useState("home");

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
      
      {screen === "home" && (
        <div className="grid gap-4 grid-cols-2">
          <button className="p-4 bg-blue-600 text-white rounded-xl shadow"
            onClick={() => setScreen("ask")}>
            Ask a Question
          </button>
          {/* other buttons... */}
        </div>
      )}

      {screen === "ask" && <AskAgent />}
    </div>
  );
};

export default Dashboard;