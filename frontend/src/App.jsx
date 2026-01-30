import { useState } from "react";
import Header from "./components/Header";
import InternshipForm from "./components/InternshipForm";
import InternshipList from "./components/InternshipList";

function App() {
  const [internships, setInternships] = useState([]);

  const addInternshipHandler = (internship) => {
    setInternships((prev) => [internship, ...prev]);
  };

  return (
    <div>
      <Header />
      <InternshipForm onAddInternship={addInternshipHandler} />
      <InternshipList internships={internships} />
    </div>
  );
}

export default App;
