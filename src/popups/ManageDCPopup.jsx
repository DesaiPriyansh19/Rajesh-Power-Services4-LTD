import React from "react";

export default function ManageDCPopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm" 

        onClick={onClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[600px] p-6 z-10">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Manage DC by Store/Project</h2>
        <p>This is the Manage DC content and table UI.</p>
      </div>
    </div>
  );
}
