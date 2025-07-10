import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "Dev Kalavadiya", city: "Ahmedabad", phone: "6351027376", totalSelling: 120, totalAmount: 40000, status: "Paid" },
    { id: 2, name: "Rajvi Patel", city: "Surat", phone: "9123456789", totalSelling: 90, totalAmount: 32000, status: "Pending" },
    { id: 3, name: "Karan Shah", city: "Vadodara", phone: "9012345678", totalSelling: 70, totalAmount: 25000, status: "Paid" },
    { id: 4, name: "Priya Mehta", city: "Rajkot", phone: "9988776655", totalSelling: 150, totalAmount: 60000, status: "Pending" },
    { id: 5, name: "Mehul Desai", city: "Ahmedabad", phone: "9765432109", totalSelling: 40, totalAmount: 15000, status: "Paid" },
    { id: 6, name: "Ankita Joshi", city: "Surat", phone: "9090909090", totalSelling: 60, totalAmount: 20000, status: "Pending" },
    { id: 7, name: "Bhavin Rana", city: "Rajkot", phone: "9123987654", totalSelling: 85, totalAmount: 28000, status: "Paid" },
    { id: 8, name: "Nirali Shah", city: "Vadodara", phone: "8899776655", totalSelling: 130, totalAmount: 50000, status: "Pending" },
    { id: 9, name: "Dev Kalavadiya", city: "Ahmedabad", phone: "6351027376", totalSelling: 120, totalAmount: 40000, status: "Paid" },
    { id: 10, name: "Rajvi Patel", city: "Surat", phone: "9123456789", totalSelling: 90, totalAmount: 32000, status: "Pending" },
    { id: 11, name: "Karan Shah", city: "Vadodara", phone: "9012345678", totalSelling: 70, totalAmount: 25000, status: "Paid" },
    { id: 12, name: "Priya Mehta", city: "Rajkot", phone: "9988776655", totalSelling: 150, totalAmount: 60000, status: "Pending" },
    { id: 13, name: "Mehul Desai", city: "Ahmedabad", phone: "9765432109", totalSelling: 40, totalAmount: 15000, status: "Paid" },
    { id: 14, name: "Ankita Joshi", city: "Surat", phone: "9090909090", totalSelling: 60, totalAmount: 20000, status: "Pending" },
    { id: 15, name: "Bhavin Rana", city: "Rajkot", phone: "9123987654", totalSelling: 85, totalAmount: 28000, status: "Paid" },
    { id: 16, name: "Nirali Shah", city: "Vadodara", phone: "8899776655", totalSelling: 130, totalAmount: 50000, status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [cityFilter, setCityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const togglePaymentStatus = (id) => {
    const updated = userData.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Paid" ? "Pending" : "Paid" }
        : user
    );
    setUserData(updated);
  };

  const filteredData = userData
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) || String(user.id).includes(search))
    .filter((user) => (cityFilter ? user.city === cityFilter : true))
    .filter((user) => (statusFilter ? user.status === statusFilter : true))
    .filter((user) => (phoneFilter ? user.phone.includes(phoneFilter) : true));

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (typeof valA === "string") {
      return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    } else {
      return sortOrder === "asc" ? valA - valB : valB - valA;
    }
  });

  let paginatedData = [];
  if (sortedData.length <= itemsPerPage) {
    paginatedData = sortedData;
  } else {
    paginatedData = sortedData.slice(0, itemsPerPage);
  }

  return (
    <div className="container">
      <h2>📊 User Data Table</h2>

      <input
        type="text"
        placeholder="🔍 Search by Name or ID"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        <select onChange={(e) => setCityFilter(e.target.value)}>
          <option value="">🌍 All Cities</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Vadodara">Vadodara</option>
        </select>

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">💳 All Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>

        <input
          type="text"
          placeholder="📱 Filter by Phone"
          onChange={(e) => setPhoneFilter(e.target.value)}
        />

        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={25}>Show 25</option>
          <option value={50}>Show 50</option>
          <option value={75}>Show 75</option>
          <option value={100}>Show 100</option>
          <option value={9999}>Show All</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID ⬍</th>
            <th onClick={() => handleSort("name")}>Name ⬍</th>
            <th>City</th>
            <th>Phone</th>
            <th onClick={() => handleSort("totalSelling")}>Selling ⬍</th>
            <th onClick={() => handleSort("totalAmount")}>Amount ⬍</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>{user.totalSelling}</td>
              <td>₹{user.totalAmount.toLocaleString()}</td>
              <td
                className={`status ${user.status.toLowerCase()}`}
                onClick={() => togglePaymentStatus(user.id)}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
