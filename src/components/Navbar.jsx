import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/70 backdrop-blur">
      <nav className="flex w-full justify-end px-6 py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* ปุ่ม Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4",
                isActive ? "text-black" : "",
              ].join(" ")
            }
          >
            Home
          </NavLink>

          {/* ปุ่ม แปลภาษา */}
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4">
            แปลภาษา
          </button>

          {/* ปุ่ม เสนอประโยค */}
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4">
            เสนอประโยค
          </button>

          {/* ปุ่ม Feedback */}
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4">
            Feedback
          </button>
        </div>
      </nav>
    </header>
  );
}
