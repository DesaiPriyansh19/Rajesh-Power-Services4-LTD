import React, { useState } from "react";

export default function StorePage() {
  const [projectCode, setProjectCode] = useState("");
  const [storeId, setStoreId] = useState("");

  const storesData = [
    {
      storeId: "ST-001",
      projectCode: "PR-101",
      company: "ABC Constructions",
      locations: "Ahmedabad, Surat",
      status: "Active",
    },
    {
      storeId: "ST-002",
      projectCode: "PR-102",
      company: "XYZ Infra",
      locations: "Vadodara, Rajkot",
      status: "Inactive",
    },
    {
      storeId: "ST-003",
      projectCode: "PR-103",
      company: "LMN Developers",
      locations: "Gandhinagar",
      status: "Active",
    },
  ];

  const handleSearch = () => {
    console.log("Searching for:", { projectCode, storeId });
  };

  return (
    <div className="p-4 bg-white rounded-lg box-shadow-1">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">STORE</h1>
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
  {/* All inputs and buttons together */}
  <div className="flex flex-wrap items-center gap-4 flex-grow">
    <input
      type="text"
      placeholder="Project Code"
      value={projectCode}
      onChange={(e) => setProjectCode(e.target.value)}
      className="border p-2 rounded w-48 sm:w-56"
    />
    <input
      type="text"
      placeholder="Store ID"
      value={storeId}
      onChange={(e) => setStoreId(e.target.value)}
      className="border p-2 rounded w-48 sm:w-56"
    />
    <button
      onClick={handleSearch}
      className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
    >
      Search
    </button>

    <button className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap ml-auto">
      Create New Store
    </button>
    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap">
      Manage Store
    </button>
  </div>
</div>

      {/* Table */}
      <div className="overflow-x-auto bg-white box-shadow-2 rounded-xl">
        <table className="min-w-full border border-gray-200">
          <thead className="">
            <tr>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Associated Company</th>
              <th className="p-3 border">Working Locations</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storesData.map((store, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border">{store.storeId}</td>
                <td className="p-3 border">{store.projectCode}</td>
                <td className="p-3 border">{store.company}</td>
                <td className="p-3 border">{store.locations}</td>
                <td
                  className={`p-3 border font-semibold ${
                    store.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {store.status}
                </td>
                <td className="p-3 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
