import { useEffect, useState } from "react";

import CauseCard from "../components/CauseCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

import { getAllCauses } from "../api/causes";

import "../App.css";

function Causes() {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const data = await getAllCauses();
        setCauses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  const filteredCauses = causes.filter((cause) => {
    const matchesSearch =
      cause.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cause.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "All" || cause.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page">
      <div className="card causes-page">
        <Navbar />

        <div className="causes-header">
          <h1>Donation Causes</h1>
          <p>Support trusted causes and help people around the world.</p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
        />

        {loading ? (
          <Loader text="Loading Causes..." />
        ) : filteredCauses.length === 0 ? (
          <h2 className="loading-text">No causes found</h2>
        ) : (
          <div className="causes-grid">
            {filteredCauses.map((cause) => (
              <CauseCard key={cause._id} cause={cause} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Causes;
