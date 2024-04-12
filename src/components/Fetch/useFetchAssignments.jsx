import { useState, useEffect } from "react";
import axios from "axios";
// import useCurrentTeacherId from "./useCurrentTeacherId";

const useFetchAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  // const teacherId = useCurrentTeacherId();

  useEffect(
    () => {
      // if (!teacherId) {
      //   setLoading(false);
      //   return;
      // }

      const fetchAssignments = async () => {
        try {
          // Replace the URL with your actual endpoint and uncomment the teacherId part if needed
          const response = await axios.get(`http://localhost:3001/assignments`);
          const today = new Date();
          const oneWeekAgo = new Date(today.setDate(today.getDate() - 7));

          const recentAssignments = response.data.filter((assignment) => {
            const dueDate = new Date(assignment.due_date);
            return dueDate >= oneWeekAgo;
          });

          const sortedAssignments = recentAssignments.sort(
            (a, b) => new Date(b.due_date) - new Date(a.due_date)
          );

          setAssignments(sortedAssignments);
        } catch (error) {
          console.error("Error fetching assignments:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAssignments();
    },
    [
      /* teacherId */
    ]
  );

  return { assignments, loading };
};

export default useFetchAssignments;
