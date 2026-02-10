import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center gap-4 p-4 min-h-[88vh]">
      <span className="text-6xl font-black text-red-600">404</span>
      <h1 className="text-xl font-semibold">Page Not found!</h1>
      <Link to="/" className="border rounded px-2 py-1">Home</Link>
    </div>
  );
}

export default NotFound;
