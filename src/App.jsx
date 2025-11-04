import React from "react";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 sm:py-32">
        <h1 className="text-2xl font-medium sm:text-3xl">Translate dialect</h1>
      </main>
    </div>
  );
}
