function InternshipItem({ internship, onUpdate, onDelete }) {
  const updateStatus = (e) => {
    onUpdate(internship._id, { status: e.target.value });
  };

  return (
    <div className="border w-fit p-3 rounded-2xl h-40 m-5 ">
      <h4>Company: {internship.company}</h4>
      <p>Role: {internship.role}</p>

      <div>Status: <select className="border rounded m-0.5" value={internship.status} onChange={updateStatus}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      </div>

      <button className="bg-red-500 pl-2 pr-2 rounded mt-1" onClick={() => onDelete(internship._id)}>
        Delete
      </button>
    </div>
  );
}

export default InternshipItem;
