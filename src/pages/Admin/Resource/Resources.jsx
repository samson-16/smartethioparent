import React, { useState , useEffect} from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls

const Resources = () => {
  const [resource, setResource] = useState({
    title: '',
    grade: 0,
    subject: 0,
    file: null,
  });

  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);
  const fetchGrades = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/grades/');
      setGrades(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/subjects/');
      setSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
}
  const fetchResources = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/resource/');
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // Fetch grades and subjects on component mount
  useEffect(() => {
    fetchGrades()
    fetchSubjects()
    fetchResources()
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value }); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResource({ ...resource, file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(); // Use FormData for file uploads
    formData.append('title', resource.title);
    formData.append('grade', resource.grade);
    formData.append('subject', resource.subject);
    formData.append('file', resource.file); // Ensure file is not null
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/resource/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Resource created successfully:', response.data);
      // Optionally, clear the form after successful submission
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  const downloadResource = async (resourceId, resourceTitle) => {
    try {
      const downloadUrl = `http://127.0.0.1:8000/api/resource/${resourceId}/download/`;
      const response = await axios.get(downloadUrl, {
        responseType: 'blob', // Request the response as a blob (binary data)
      });

      const blob = new Blob([response.data], { type: response.data.type }); // Create a Blob object
      const url = window.URL.createObjectURL(blob); // Create a temporary URL for the blob
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `<span class="math-inline">\{resourceTitle\}\.</span>{/* Get file extension from response or resource data */}`); // Set download filename with title and potential extension
      document.body.appendChild(link);
      link.click(); // Simulate a click on the link to initiate download
      document.body.removeChild(link); // Remove the temporary link after download
    } catch (error) {
      console.error(error);
      // Handle download error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Add Resource</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={resource.title} onChange={handleChange} required />
<br />
        <label htmlFor="grade">Grade:</label>
        <select id="grade" name="grade" value={resource.grade} onChange={handleChange} required>
          <option value="">Select Grade</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>{grade.grade}</option>
          ))}
        </select>
        <br />
        <label htmlFor="subject">Subject:</label>
        <select id="subject" name="subject" value={resource.subject} onChange={handleChange} required>
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>{subject.subject}</option>
          ))}
        </select>
        <br />
        <label htmlFor="file">File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} required />
<br /><br />
        <button type="submit">Add Resource</button>
      </form>

<br /><br />
      <h2>Resources</h2>
{resources.length > 0 ? (
  <ul>
    {resources.map((resource) => (
      <li key={resource.id}>
        {/* Display resource details: title, grade, and subject */}
        {resource.title} <br />
        Grade: {resource.grade} <br /> Subject: {resource.subject} <br />
        <button onClick={() => downloadResource(resource.id, resource.title)}>Download</button>
        <br /> <br />
      </li>
    ))}
  </ul>
) : (
  <p>No resources found.</p>
)}

    </div>


  );
};

export default Resources;
