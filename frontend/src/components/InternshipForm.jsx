import { useState } from "react";

function InternshipForm({ onAddInternship }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !role) return;

    onAddInternship({
      company,
      role,
      status: "Applied"
    });

    setCompany("");
    setRole("");
  };

  return (
    <div className="size-full p-5 mt-5">
      <form onSubmit={submitHandler} className="grid grid-cols-3 ">
      <input
        className="border-2 mr-5 pl-4"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        className="border-2 mr-5 pl-4"
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button className="border-2 w-30 rounded p-1 bg-gray-400" type="submit">Add Internship</button>
    </form>
    </div>
  );
}

export default InternshipForm;
