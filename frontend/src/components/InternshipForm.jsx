import { useState } from "react";

function InternshipForm({ onAddInternship }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !role) return;

    onAddInternship({
      id: Date.now(),
      company,
      role,
      status: "Applied"
    });

    setCompany("");
    setRole("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button type="submit">Add Internship</button>
    </form>
  );
}

export default InternshipForm;
