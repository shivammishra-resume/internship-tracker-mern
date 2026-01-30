import { useState } from "react";
import InternshipItem from "./InternshipItem";

function InternshipList({ internships }) {
  return (
    <div>
      <h3>My Applications</h3>
      {internships.length === 0 && <p>No internships added yet</p>}

      {internships.map((internship) => (
        <InternshipItem
          key={internship.id}
          internship={internship}
        />
      ))}
    </div>
  );
}

export default InternshipList;
