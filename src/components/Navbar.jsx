import React from "react";


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/70 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div className="h-8 w-28 select-none text-sm font-semibold tracking-wide text-gray-900/70" />
                <div className="flex items-center gap-2 sm:gap-3">
                    <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4">แปลภาษา</button>
                    <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:px-4">แต่งประโยค</button>
                    <button className="rounded-full border border-gray-900/20 bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/30 sm:px-4">Feedback</button>
                </div>
            </nav>
        </header>
    );
}