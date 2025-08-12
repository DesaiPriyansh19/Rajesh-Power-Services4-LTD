import React, { useState } from "react";

export default function GoodsIssueUpdates() {
  const [store, setStore] = useState("");
  const [challanNo, setChallanNo] = useState("");

  const goodsIssueData = [
    {
      challanNo: "CH-1001",
      deliveredTo: "Warehouse 1",
      status: "Delivered",
      projectCode: "PRJ-001",
      storeId: "ST-101",
    },
    {
      challanNo: "CH-1002",
      deliveredTo: "Warehouse 2",
      status: "Pending",
      projectCode: "PRJ-002",
      storeId: "ST-102",
    },
    {
      challanNo: "CH-1003",
      deliveredTo: "Warehouse 3",
      status: "Delivered",
      projectCode: "PRJ-003",
      storeId: "ST-103",
    },
  ];

  const handleSearch = () => {
    console.log("Search with:", { store, challanNo });
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">GOODS ISSUE UPDATES</h1>

      {/* Search bar and button all in one line */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <input
          type="text"
          placeholder="Challan No."
          value={challanNo}
          onChange={(e) => setChallanNo(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <button
          onClick={handleSearch}
          className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Challan No.</th>
              <th className="p-3 border">Delivered To</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {goodsIssueData.map((row, i) => (
              <tr
                key={i}
                className={`text-center hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-3 border">{row.challanNo}</td>
                <td className="p-3 border">{row.deliveredTo}</td>
                <td className="p-3 border font-semibold">{row.status}</td>
                <td className="p-3 border">{row.projectCode}</td>
                <td className="p-3 border">{row.storeId}</td>
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
