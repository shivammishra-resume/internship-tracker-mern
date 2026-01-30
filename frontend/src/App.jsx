import { useEffect, useState } from "react";
import Header from "./components/Header";
import InternshipForm from "./components/InternshipForm";
import InternshipList from "./components/InternshipList";

function App() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/internships");
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
      const res = await fetch("http://localhost:5000/api/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(internship)
      });

      const data = await res.json();
      setInternships((prev) => [data, ...prev]);
    } catch (error) {
      console.error("Failed to add internship");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <InternshipForm onAddInternship={addInternshipHandler} />
      <InternshipList internships={internships} />
    </div>
  );
}

export default App;
