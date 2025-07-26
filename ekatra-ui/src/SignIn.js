// src/SignIn.js
import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // After popup, onAuthStateChanged in App.js will fire
    } catch (err) {
      console.error("Sign‑in error:", err);
      alert("Failed to sign in: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: "auto", padding: "2rem", textAlign: "center" }}>
      <h2>Sign in to Sahayak</h2>
      <button onClick={handleSignIn} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
        Sign in with Google
      </button>
    </div>
  );
}
