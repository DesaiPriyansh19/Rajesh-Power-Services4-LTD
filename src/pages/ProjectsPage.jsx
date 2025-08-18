import React, { useState } from "react";
import CreateNewProject from "../popups/CreateNewProject";
import ManageProject from "../popups/ManageProject";

export default function ProjectsPage() {
  const [projectCode, setProjectCode] = useState("");
  const [associatedCompany, setAssociatedCompany] = useState("");
    const [openModal, setOpenModal] = useState(null);
  const projectsData = [
    {
      projectCode: "PRJ-001",
      storeId: "ST-101",
      company: "ABC Constructions",
      locations: "Ahmedabad, Surat",
      status: "Active",
    },
    {
      projectCode: "PRJ-002",
      storeId: "ST-102",
      company: "XYZ Infra",
      locations: "Vadodara, Rajkot",
      status: "Inactive",
    },
    {
      projectCode: "PRJ-003",
      storeId: "ST-103",
      company: "LMN Developers",
      locations: "Gandhinagar",
      status: "Active",
    },
  ];

  const handleSearch = () => {
    console.log("Searching projects:", { projectCode, associatedCompany });
  };

  return (
    <div className="p-4 bg-white rounded-md box-shadow-1">
      {/* Heading */}
      <h1 className="text-2xl  mb-6">PROJECTS</h1>

      {/* Search inputs + Search + Action buttons all in one line */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Project Code"
          value={projectCode}
          onChange={(e) => setProjectCode(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <input
          type="text"
          placeholder="Associated Company"
          value={associatedCompany}
          onChange={(e) => setAssociatedCompany(e.target.value)}
          className="border p-2 rounded w-48 sm:w-56"
        />
        <button
          onClick={handleSearch}
          className="bg-[#005AAB] text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
        >
          Search
        </button>

        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap ml-auto"
        onClick={() => setOpenModal("create")}>
          Create New Project
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
        onClick={() => setOpenModal("manage")}>
          Manage Project
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white box-shadow-2 rounded-xl ">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="">
            <tr>
              <th className="p-3 border">Project Code</th>
              <th className="p-3 border">Store ID</th>
              <th className="p-3 border">Associated Company</th>
              <th className="p-3 border">Working Locations</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((proj, i) => (
              <tr
                key={i}
                className={`text-center hover:bg-gray-50 ${
                  i % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-3 border">{proj.projectCode}</td>
                <td className="p-3 border">{proj.storeId}</td>
                <td className="p-3 border">{proj.company}</td>
                <td className="p-3 border">{proj.locations}</td>
                <td
                  className={`p-3 border font-semibold ${
                    proj.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {proj.status}
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
             {/* Conditionally render the different popups */}
              {openModal === "create" && (
                <CreateNewProject onClose={() => setOpenModal(null)} />
              )}
              {openModal === "manage" && (
                <ManageProject onClose={() => setOpenModal(null)} />
              )}
      </div>
    </div>
  );
}
