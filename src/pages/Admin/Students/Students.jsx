import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

import axios from "axios";

const columns = [
  { field: "id", headerName: "Parent ID", width: 90 },
  { field: "first_name", headerName: "Parent-First-Name", width: 150 },
  { field: "last_name", headerName: "Parent-Last-Name", width: 150 },
  { field: "email", headerName: "Parent-Email", width: 170 },
  { field: "phone_number", headerName: "Phone-Number", width: 150 },
  { field: "first_name_child", headerName: "First-Name", width: 130 },
  { field: "last_name_child", headerName: "Last-Name", width: 130 },
  { field: "gender_child", headerName: "Gender", width: 60 },
  { field: "grade_child", headerName: " Grade", width: 60 },
  { field: "section_child", headerName: "Section", width: 80 },
  { field: "roll_number_child", headerName: "Roll_number", width: 80 },
];

/**
 * Represents a component for managing student information.
 *
 * @returns {JSX.Element} The Students component.
 */
const Students = () => {
  /**
 * Represents a component for managing student information.
 *  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 *  
 */

  const [rows, setRows] = useState([]);
  const [openStudentForm, setOpenStudentForm] = useState(false);
  const [openParentForm, setOpenParentForm] = useState(false);

  const handleOpenStudentForm = () => setOpenStudentForm(true);
  const handleOpenParentForm = () => setOpenParentForm(true);

  const handleClose = () => {
    setOpenStudentForm(false);
    setOpenParentForm(false);
  };

  const [grades, setGrades] = useState([]);
  const initialGrade = grades.length > 0 ? grades[0].id : '';

  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    roll_number: "",
    grade: initialGrade,
    section: "",
  });

  const [parentInfo, setParentInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    studentId: "",
  });

  const [studentIds, setStudentIds] = useState([]);

  useEffect(() => {
    // Fetch student IDs from the backend when the component mounts
    const fetchGrades= async ()=>{
        try{
            const res=await axios.get("http://127.0.0.1:8000/api/grades/")
            console.log("Grades", res.data)
            setGrades(res.data)

        }catch(error){
            console.error("Error", error)
        }
    };

    const fetchStudentIds = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/student/");
        console.log(response.data);
        const ids = response.data.map((student) => student.id);
        setStudentIds(ids);
        // console.log( setStudentIds(response.data))
      } catch (error) {
        console.error("Error fetching student IDs:", error);
      }
    };
    fetchStudentIds();
    fetchGrades();
  }, []);


  const handleAddParentInfo = () => {
    if (
      !parentInfo.first_name ||
      !parentInfo.last_name ||
      !parentInfo.email ||
      !parentInfo.phone_number ||
      !parentInfo.children
    ) {
      alert("Please fill all fields.");
      return;
    }
  };

    //  console.log("New Student Info", newStudent)
  const handleAddStudent = () => {
    if (
      !newStudent.first_name ||
      !newStudent.last_name ||
      !newStudent.gender ||
      !newStudent.roll_number ||
      !newStudent.grade ||
      !newStudent.section
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (newStudent.roll_number <= 0) {
      alert("Roll number should be a positive integer.");
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/student/", newStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        alert("New student added successfully!");
        handleClose();
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        alert("An error occurred while adding the student.");
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/parent/")
      .then((res) => {
        console.log(res.data);
        const transformedData = finalSprid(res.data);
        setRows(transformedData);
      })
      .catch((err) => {
        console.log("err", err);
      });
    setNewStudent({
      first_name: "",
      last_name: "",
      gender: "",
      roll_number: "",
      grade: "",
      section: "",
    });
  }, []);

  function dis(data) {
    const res = {};
    const child = {};

    if (data) {
      for (const key in data) {
        if (key !== "children") res[key] = data[key];
      }
    }

    if (data.children) {
      for (const key in data.children[0]) {
        child[key + "_child"] = data.children[0][key];
      }
    }

    return Object.assign({}, res, child);
  }

  function finalSprid(data) {
    const final = [];
    for (const key in data) {
      final.push(dis(data[key]));
    }
    return final;
  }

  return (
    <section className="flex flex-col items-center">
      <Box
        margin="20px"
        height="calc(100vh - 40px)"
        width="calc(100vw - 40px)"
        sx={{
          fontWeight: 600,
        }}
      >
        <h1 className="text-center font-bold text-lg">Manage Student list</h1>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleOpenStudentForm}>
            Add Student
          </Button>
          <Button variant="contained" onClick={handleOpenParentForm}>
            Add Parent
          </Button>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          editMode="row"
          pagination
        />
      </Box>
      {openStudentForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 shadow-blue-900 ">
            <h2 className="font-bold text-center text-lg">Student Form</h2>
            <label htmlFor="first-name" className="block mb-2">
              First Name
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
                value={newStudent.first_name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, first_name: e.target.value })
                }
              />
            </label>
            <label htmlFor="last-name" className="mb-2">
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1"
                value={newStudent.last_name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, last_name: e.target.value })
                }
              />
            </label>
            <label htmlFor="gender" className="block mb-2 mt-3">
              Gender
              <select
                name="gender"
                id="gender"
                className=" w-[100px] border border-gray-300 rounded-md py-2 px-3 mt-1 ml-1"
                value={newStudent.gender}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, gender: e.target.value })
                }
              >
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </label>
            <label htmlFor="grade" className=" mb-2">
              Grade
              <select
                name="grade"

                id="grade"
                className="border border-gray-300 rounded-md py-2 px-3 mt-1 ml-1 w-[100px] mr-2"
                value={newStudent.grade}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, grade: e.target.value })
                }
                required
                // defaultValue={1}
              >
                {grades.map((g) => (
                  <option key={g.id} value={g.id} >
                    {g.grade}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="section" className=" mb-2">
              Section
              <select
                name="section"
                id="section"
                className=" border border-gray-300 rounded-md py-2 px-3 mt-1 w-[100px] ml-1"
                value={newStudent.section}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, section: e.target.value })
                }
              >
                {["A", "B", "C", "D", "E"].map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="roll-number" className="block mb-2">
              Roll Number
              <input
                type="number"
                placeholder="Roll Number"
                className="w-[160px] border border-gray-300 rounded-md py-2 px-3 ml-2 mt-3"
                value={newStudent.roll_number}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, roll_number: e.target.value })
                }
              />
            </label>
            <div className="flex justify-between">
              <Button
                variant="contained"
                onClick={() => {
                  handleClose();
                  setNewStudent({
                    first_name: "",
                    last_name: "",
                    gender: "",
                    roll_number: "",
                    grade: "",
                    section: "",
                  });
                }}
                sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleAddStudent();
                  handleClose();
                }}
                sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      )}
     
      <section>
        <div>
       
          {openParentForm && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ">
              <div className="bg-white rounded-2xl shadow-2xl shadow-blue-800 p-6 w-96 ">
                <h2 className="font-bold text-center text-blue-600 text-pretty shadow-xl mb-2">Parent Form</h2>
                <label htmlFor="first-name" className="block mb-2">
                  First Name
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
                    value={parentInfo.first_name}
                    onChange={(e) =>
                      setParentInfo({
                        ...parentInfo,
                        first_name: e.target.value,
                      })
                    }
                  />
                </label>
                <label htmlFor="last-name" className="mb-2">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1"
                    value={parentInfo.last_name}
                    onChange={(e) =>
                      setParentInfo({
                        ...parentInfo,
                        last_name: e.target.value,
                      })
                    }
                  />
                </label>

                <label htmlFor="last-name" className="mb-2">
                  Email
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1"
                    value={parentInfo.email}
                    onChange={(e) =>
                      setParentInfo({ ...parentInfo, email: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="last-name" className="mb-2">
                  Phone number
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1"
                    value={parentInfo.phone_number}
                    onChange={(e) =>
                      setParentInfo({
                        ...parentInfo,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </label>

                <label htmlFor="section" className=" mb-2">
                  Student_ID
                  <select
                    name="student_id"
                    id="student_id"
                    className=" border border-gray-300 rounded-md py-2 px-3 mt-3 w-[150px] ml-1"
                    value={parentInfo.children}
                    onChange={(e) =>
                      setParentInfo({ ...parentInfo, children: e.target.value })
                    }
                  >
                    {studentIds.map((ID) => (
                      <option key={ID} value={ID}>
                        {ID}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="flex justify-between mt-5">
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleClose();
                      setParentInfo({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone_number: "",
                        id: "",
                      });
                    }}
                    sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleAddParentInfo();
                      handleClose();
                    }}
                    sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Students;
