import React, { useState } from "react";

export default function UsersPage() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Priyansh Desai", email: "priyansh@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Neha Patel", email: "neha@example.com", role: "Viewer", status: "Active" },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* Search & Add User button */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-grow min-w-[250px]"
        />
        <button className="bg-[#005AAB] text-white px-5 py-2 rounded hover:opacity-90 whitespace-nowrap">
          Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-left">Email</th>
              <th className="p-3 border text-left">Role</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.role}</td>
                  <td
                    className={`p-3 border font-semibold ${
                      user.status === "Active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="p-3 border text-center">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
