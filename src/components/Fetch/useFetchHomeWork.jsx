import { useState, useEffect } from "react";
import axios from "axios";

const useFetchHomework = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/homework`);
        // ?teacher_id=${2}
        const today = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD

        const activeHomework = response.data.filter((hw) => {
          // Check if today's date falls within the homework's active period
          return today >= hw.assigned_date && today <= hw.due_date;
        });

        setHomework(activeHomework);
      } catch (error) {
        console.error("Error fetching homework:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

  return { homework, loading };
};

export default useFetchHomework;
