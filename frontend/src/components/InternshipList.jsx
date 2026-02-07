import InternshipItem from "./InternshipItem";

function InternshipList({ internships, onUpdate, onDelete }) {
  return (
    <div>
      <h3>My Applications</h3>

      {internships.map((internship) => (
        <InternshipItem
          key={internship._id}
          internship={internship}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default InternshipList;
