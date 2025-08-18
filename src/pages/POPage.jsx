import React from "react";

export default function POPage() {
  // Sample data
  const poData = [
    {
      poNumber: "PO-12345",
      projectCode: "PC-101",
      storeId: "ST-505",
      dcStatus: "Pending",
      poSettlement: "Not Done",
    },
    {
      poNumber: "PO-67890",
      projectCode: "PC-202",
      storeId: "ST-808",
      dcStatus: "Approved",
      poSettlement: "Done",
    },
    {
      poNumber: "PO-45678",
      projectCode: "PC-303",
      storeId: "ST-909",
      dcStatus: "Not Added",
      poSettlement: "Not Done",
    },
  ];

  // Badge colors for DC Status
  const getDcStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#FFDA8B] text-black";
      case "Approved":
        return "bg-[#C7F4B2] text-black";
      case "Not Added":
        return "bg-[#FF978B] text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };

  return (
    <div className="p-4 bg-white rounded-md  box-shadow-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-normal">PURCHASE ORDER UPDATES</h1>
     <div>
  {/* Hidden file input */}
  <input
    type="file"
    id="upload-po"
    className="hidden"
    onChange={(e) => console.log(e.target.files[0]?.name)}
  />

  {/* Label acts as button */}
  <label
    htmlFor="upload-po"
    className="bg-[#005AAB] text-white text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-[#00427f]"
  >
    Upload PO
  </label>
</div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg box-shadow-2">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="">
            <tr>
              <th className="px-4 py-3 border">PO Number</th>
              <th className="px-4 py-3 border">Project Code Included</th>
              <th className="px-4 py-3 border">Store ID Included</th>
              <th className="px-4 py-3 border">DC Status</th>
              <th className="px-4 py-3 border">PO Settlement</th>
              <th className="px-4 py-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {poData.map((po, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 border">{po.poNumber}</td>
                <td className="px-4 py-3 border">{po.projectCode}</td>
                <td className="px-4 py-3 border">{po.storeId}</td>
                <td className="px-4 py-3 border">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${getDcStatusColor(
                      po.dcStatus
                    )}`}
                  >
                    {po.dcStatus}
                  </span>
                </td>
                <td className="px-4 py-3 border">
                  {po.poSettlement === "Not Done" ? (
                    <span className="text-red-500 font-semibold">
                      {po.poSettlement}
                    </span>
                  ) : (
                    po.poSettlement
                  )}
                </td>
                <td className="px-4 py-3 border">
                  <button className="text-blue-600 hover:underline">
                    Edit
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
