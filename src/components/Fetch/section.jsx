import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSections = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        // const response = await axios.get(`http://localhost:8000/api/class-subjects/?teacher=${id}`);
        const response = await axios.get(`http://localhost:8000/api/class-subjects/`);

        setSections(response.data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  return { sections, loading };
};

export default useFetchSections;
