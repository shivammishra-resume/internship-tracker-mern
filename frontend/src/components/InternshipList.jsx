import InternshipItem from "./InternshipItem";

function InternshipList() {
  const internships = [
    { id: 1, company: "Amazon", role: "SDE Intern", status: "Applied" },
    { id: 2, company: "Google", role: "SWE Intern", status: "Interview" }
  ];

  return (
    <div>
      <h3>My Applications</h3>
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
