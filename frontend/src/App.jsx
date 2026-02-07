import { useEffect, useState } from "react";
import Header from "./components/Header";
import InternshipForm from "./components/InternshipForm";
import InternshipList from "./components/InternshipList";

function App() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await fetch(`${API_URL}/api/internships`);
        const data = await res.json();
        setInternships(data);
      } catch (error) {
        console.error("Failed to fetch internships");
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const addInternshipHandler = async (internship) => {
    try {
      const res = await fetch(`${API_URL}/api/internships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(internship),
      });

      const data = await res.json();
      setInternships((prev) => [data, ...prev]);
    } catch (error) {
      console.error("Failed to add internship");
    }
  };

  const updateInternshipHandler = async (id, updates) => {
    try {
      const res = await fetch(
        `${API_URL}/api/internships/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        }
      );

      const data = await res.json();

      setInternships((prev) =>
        prev.map((i) => (i._id === id ? data : i))
      );
    } catch (error) {
      console.error("Update failed");
    }
  };

  const deleteInternshipHandler = async (id) => {
    try {
      await fetch(
        `${API_URL}/api/internships/${id}`,
        { method: "DELETE" }
      );

      setInternships((prev) =>
        prev.filter((i) => i._id !== id)
      );
    } catch (error) {
      console.error("Delete failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <InternshipForm onAddInternship={addInternshipHandler} />
      <InternshipList
        internships={internships}
        onUpdate={updateInternshipHandler}
        onDelete={deleteInternshipHandler}
      />
    </div>
  );
}

export default App;
