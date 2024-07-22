import { useState } from "react";
import "../styles/Info.css";

export default function Info() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    editable: true,
  });

  const handleNameChange = (e) => {
    const newInfo = { ...info, name: e.target.value };
    setInfo(newInfo);
  };

  const handleEmailChange = (e) => {
    const newInfo = { ...info, email: e.target.value };
    setInfo(newInfo);
  };

  const handlePhoneChange = (e) => {
    const newInfo = { ...info, phone: e.target.value };
    setInfo(newInfo);
  };

  const handleEdit = () => {
    const newInfo = { ...info, editable: !info.editable };
    setInfo(newInfo);
  };

  return (
    <>
      <h2>General Information</h2>
      {info.editable ? (
        <div className="info">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={info.name}
            onChange={handleNameChange}
          />
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            value={info.email}
            onChange={handleEmailChange}
          />
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="number"
            id="phone"
            value={info.phone}
            onChange={handlePhoneChange}
          />
          <button onClick={handleEdit}>Submit</button>
        </div>
      ) : (
        <div className="info">
          <h3>Name: {info.name}</h3>
          <h3>Email Address: {info.email}</h3>
          <h3>Phone Number: {info.phone}</h3>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </>
  );
}
