import React, { useState, useEffect } from "react"
import  "./Apps.css";

const LOCAL_KEY = "users-data";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", gender: "" });
  const [editIdx, setEditIdx] = useState(null);

  // Load users from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data) setUsers(JSON.parse(data));
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIdx !== null) {
      const updated = [...users];
      updated[editIdx] = form;
      setUsers(updated);
      setEditIdx(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ name: "", email: "", gender: "" });
  };

  const handleEdit = (idx) => {
    setForm({ ...users[idx] });
    setEditIdx(idx);
  };

  const handleDelete = (idx) => {
    setUsers(users.filter((_, i) => i !== idx));
    setForm({ name: "", email: "", gender: "" });
    setEditIdx(null);
  };

  return (
    <div className="crud-wrapper">
      <h2>User Manager</h2>
      <form className="crud-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button className="" type="submit">{editIdx !== null ? "Update" : "Add"}</button>
        {editIdx !== null && (
          <button 
            type="button"
            className="cancel-btn"
            onClick={() => {
              setForm({ name: "", email: "", gender: "" });
              setEditIdx(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <table className="crud-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No users yet.
              </td>
            </tr>
          ) : (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>
                  <button className="edit-btn " onClick={() => handleEdit(i)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(i)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;