import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(form);
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Registration</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
          />
          <label className="dob-label">Date of Birth</label>
        </div>

        <div className="gender-box">
          <span>Gender:</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === 'Other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
