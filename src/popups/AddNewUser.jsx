import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddNewUser({ onClose }) {
  const [formData, setFormData] = useState({
    img: null,
    name: "",
    mobile: "",
    password: "",
    role: "", // new field
    description: "",
    permissions: [], // new field
  });
  const [preview, setPreview] = useState(null);

  const permissionsList = [
    "View Dashboard",
    "Manage Users",
    "Edit Content",
    "Delete Records",
    "Generate Reports",
  ];

  // handle input change
  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === "img") {
      const file = files[0];
      setFormData({ ...formData, img: file });
      if (file) {
        setPreview(URL.createObjectURL(file)); // create preview
      } else {
        setPreview(null);
      }
    } else if (name === "permissions") {
      let updatedPermissions = [...formData.permissions];
      if (checked) {
        updatedPermissions.push(value);
      } else {
        updatedPermissions = updatedPermissions.filter((p) => p !== value);
      }
      setFormData({ ...formData, permissions: updatedPermissions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    onClose(); // close popup after submit
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Popup */}
        <motion.div
          className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[75%] max-w-5xl p-6 z-10 overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-900 hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-6">Create New User</h2>

          {/* User Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload + Preview */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-full border"
                  />
                </div>
              )}
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-700 border rounded-lg p-2"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>

            {/* User Role Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Staff">Staff</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write something extra information..."
                className="mt-1 block w-full border rounded-lg p-2"
                rows="3"
              />
            </div>

            {/* Permissions */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Permissions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {permissionsList.map((perm) => (
                  <label key={perm} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="permissions"
                      value={perm}
                      checked={formData.permissions.includes(perm)}
                      onChange={handleChange}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{perm}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save User
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
