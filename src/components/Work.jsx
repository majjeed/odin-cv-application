import { useState } from "react";

export default function Work() {
  const [exp, setExp] = useState([]);

  const addWorkButton = () => {
    const newExp = [
      ...exp,
      {
        id: exp.length,
        companyName: "",
        positionTitle: "",
        description: "",
        startDate: "",
        endDate: "",
        editable: true,
      },
    ];
    setExp(newExp);
  };

  const updatedExp = (id, updatedEntry) => {
    const newExp = exp.map((entry) => (entry.id === id ? updatedEntry : entry));
    setExp(newExp);
  };

  return (
    <>
      <p>Work Experience</p>
      {exp.length > 0
        ? exp.map((el) => (
            <Experience key={el.id} {...el} updatedExp={updatedExp} />
          ))
        : null}
      <button onClick={addWorkButton}>Add Work Experience</button>
    </>
  );
}

function Experience({
  id,
  companyName,
  positionTitle,
  description,
  startDate,
  endDate,
  editable,
  updatedExp,
}) {
  const [tempCompanyName, setTempCompanyName] = useState(companyName);
  const [tempPositionTitle, setTempPositionTitle] = useState(positionTitle);
  const [tempDescription, setTempDescription] = useState(description);
  const [tempStartDate, SetTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);

  const handleSubmit = () => {
    updatedExp(id, {
      id,
      companyName: tempCompanyName,
      positionTitle: tempPositionTitle,
      description: tempDescription,
      startDate: tempStartDate,
      endDate: tempEndDate,
      editable: false,
    });
  };

  const handleEdit = () => {
    updatedExp(id, {
      id,
      companyName,
      positionTitle,
      description,
      startDate,
      endDate,
      editable: true,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyName") setTempCompanyName(value);
    if (name === "positionTitle") setTempPositionTitle(value);
    if (name === "description") setTempDescription(value);
    if (name === "startDate") SetTempStartDate(value);
    if (name === "endDate") setTempEndDate(value);
  };

  return (
    <>
      {editable ? (
        <>
          <label htmlFor="id">ID</label>
          <input type="text" name="id" value={id} />
          <label htmlFor={`companyName-${id}`}>Company Name</label>
          <input
            type="text"
            name="companyName"
            id={`companyName-${id}`}
            value={tempCompanyName}
            onChange={handleInputChange}
          />
          <label htmlFor={`positionTitle-${id}`}>Position Title</label>
          <input
            type="text"
            name="positionTitle"
            id={`positionTitle-${id}`}
            value={tempPositionTitle}
            onChange={handleInputChange}
          />
          <label htmlFor={`description-${id}`}>Job Description</label>
          <input
            type="text"
            name="description"
            id={`description-${id}`}
            value={tempDescription}
            onChange={handleInputChange}
          />
          <label htmlFor={`startDate-${id}`}>Start Date</label>
          <input
            type="text"
            name="startDate"
            id={`startDate-${id}`}
            value={tempStartDate}
            onChange={handleInputChange}
          />
          <label htmlFor={`endDate-${id}`}>End Date</label>
          <input
            type="text"
            name="endDate"
            id={`endDate-${id}`}
            value={tempEndDate}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h3>Id: {id}</h3>
          <h3>Company Name: {companyName}</h3>
          <h3>Position Title: {positionTitle}</h3>
          <h3>Job Description & Main Responsibilities: {description}</h3>
          <h3>Start Date: {startDate}</h3>
          <h3>End Date: {endDate}</h3>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </>
  );
}
