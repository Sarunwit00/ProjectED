import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Home />
    </div>
  );
}
