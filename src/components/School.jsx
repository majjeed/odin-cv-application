import { useState } from "react";

export default function School() {
  const [exp, setExp] = useState([]);

  const addEduButton = () => {
    const newExp = [
      ...exp,
      {
        id: exp.length,
        name: "",
        title: "",
        date: "",
        editable: true,
      },
    ];
    setExp(newExp);
  };

  const updatedExp = (id, education) => {
    const newExp = exp.map((entry) => (entry.id === id ? education : entry));
    setExp(newExp);
  };

  return (
    <>
      <p>Education</p>
      {exp.length > 0
        ? exp.map((el) => (
            <Experience key={el.id} {...el} updatedExp={updatedExp} />
          ))
        : null}
      <button onClick={addEduButton}>Add Education</button>
    </>
  );
}

function Experience({ id, name, title, date, editable, updatedExp }) {
  const [tempName, setTempName] = useState(name);
  const [tempTitle, setTempTitle] = useState(title);
  const [tempDate, setTempDate] = useState(date);

  const handleSubmit = () => {
    updatedExp(id, {
      id,
      name: tempName,
      title: tempTitle,
      date: tempDate,
      editable: false,
    });
  };

  const handleEdit = () => {
    updatedExp(id, { id, name, title, date, editable: true });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setTempName(value);
    if (name === "title") setTempTitle(value);
    if (name === "date") setTempDate(value);
  };

  return (
    <>
      {editable ? (
        <>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" value={id} />
          <label htmlFor={`name-${id}`}>Name</label>
          <input
            type="text"
            name="name"
            id={`name-${id}`}
            value={tempName}
            onChange={handleInputChange}
          />
          <label htmlFor={`title-${id}`}>Title</label>
          <input
            type="text"
            name="title"
            id={`title-${id}`}
            value={tempTitle}
            onChange={handleInputChange}
          />
          <label htmlFor={`date-${id}`}>Date</label>
          <input
            type="text"
            name="date"
            id={`date-${id}`}
            value={tempDate}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h3>Id: {id}</h3>
          <h3>Name: {name}</h3>
          <h3>Title: {title}</h3>
          <h3>Date: {date}</h3>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </>
  );
}
