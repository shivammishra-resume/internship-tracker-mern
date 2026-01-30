function InternshipItem({ internship }) {
  return (
    <div>
      <h4>{internship.company}</h4>
      <p>{internship.role}</p>
      <span>Status: {internship.status}</span>
    </div>
  );
}

export default InternshipItem;
