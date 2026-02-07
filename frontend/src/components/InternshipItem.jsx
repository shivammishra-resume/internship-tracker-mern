function InternshipItem({ internship, onUpdate, onDelete }) {
  const updateStatus = (e) => {
    onUpdate(internship._id, { status: e.target.value });
  };

  return (
    <div>
      <h4>{internship.company}</h4>
      <p>{internship.role}</p>

      <select value={internship.status} onChange={updateStatus}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button onClick={() => onDelete(internship._id)}>
        Delete
      </button>
    </div>
  );
}

export default InternshipItem;
