import React, { useState } from "react";

export default function UsersPage() {
  const [searchUser, setSearchUser] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [searchPermission, setSearchPermission] = useState("");

  // --- Users data ---
  const users = [
    { id: 1, name: "Priyansh Desai", email: "priyansh@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Neha Patel", email: "neha@example.com", role: "Viewer", status: "Active" },
  ];

  // --- Roles with assigned permissions ---
  const roles = [
    { id: 1, name: "Admin", permissions: ["Add User", "Edit User", "Delete User", "View Reports"] },
    { id: 2, name: "Editor", permissions: ["Edit Content", "Publish Content"] },
    { id: 3, name: "Viewer", permissions: ["View Content"] },
  ];

  // --- Permissions list ---
  const permissions = [
    "Add User",
    "Edit User",
    "Delete User",
    "View Reports",
    "Edit Content",
    "Publish Content",
    "View Content",
  ];

  // Filters
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.email.toLowerCase().includes(searchUser.toLowerCase())
  );

  const filteredRoles = roles.filter((r) =>
    r.name.toLowerCase().includes(searchRole.toLowerCase())
  );

  const filteredPermissions = permissions.filter((p) =>
    p.toLowerCase().includes(searchPermission.toLowerCase())
  );

  return (
    <div className="p-6 space-y-12">
      {/* ================= USERS ================= */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            className="border p-2 rounded flex-grow min-w-[250px]"
          />
          <button className="bg-[#005AAB] text-white px-5 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Add User
          </button>
        </div>

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
      </section>

      {/* ================= ROLES ================= */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Roles</h1>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by role name"
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
            className="border p-2 rounded flex-grow min-w-[250px]"
          />
          <button className="bg-green-600 text-white px-5 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Add Role
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Role</th>
                <th className="p-3 border text-left">Permissions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center p-4 text-gray-500">
                    No roles found
                  </td>
                </tr>
              ) : (
                filteredRoles.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{role.name}</td>
                    <td className="p-3 border">
                      <span className="font-semibold">{role.permissions.length}</span> permissions
                      <div className="text-gray-600 text-xs mt-1">
                        {role.permissions.join(", ")}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= PERMISSIONS ================= */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Permissions</h1>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search permissions"
            value={searchPermission}
            onChange={(e) => setSearchPermission(e.target.value)}
            className="border p-2 rounded flex-grow min-w-[250px]"
          />
          <button className="bg-purple-600 text-white px-5 py-2 rounded hover:opacity-90 whitespace-nowrap">
            Add Permission
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Permission</th>
              </tr>
            </thead>
            <tbody>
              {filteredPermissions.length === 0 ? (
                <tr>
                  <td className="text-center p-4 text-gray-500">No permissions found</td>
                </tr>
              ) : (
                filteredPermissions.map((permission, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-3 border">{permission}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
