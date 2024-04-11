import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";

import axios from "axios";

const columns = [
  { field: "id", headerName: "Parent ID", width: 50 },
  { field: "first_name", headerName: "Parent-First-Name", width: 150 },
  { field: "last_name", headerName: "Parent-Last-Name", width: 150 },
  { field: "email", headerName: "Parent-Email", width: 170 },
  { field: "phone_number", headerName: "Parent-Phone-Number", width: 150 },
  // { field: "idchild", headerName: "Child's ID", width: 90 },
  { field: "first_name_child", headerName: "Student-First-Name", width: 150 },
  { field: "last_name_child", headerName: "Studen-Last-Name", width: 150 },
  { field: "gender_child", headerName: "Gender", width: 70 },
  { field: "grade_child", headerName: " Grade", width: 70 },
  { field: "section_child", headerName: "Section", width: 70 },

  { field: "roll_number_child", headerName: "Roll_number", width: 70 },
];

const ManageStudents = () => {
  const [rows, setRows] = useState([]);
  const [rowCount, setRowCount] = useState(0);

  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleClose = () => {
    setOpen(false);
    setNewStudent({
      first_name: "",
      last_name: "",
      gender: "",
      roll_number: "",
      grade: "",
      section: "",
    });
  };

  // funtion to restructureData

  // const restructureData = (newStudent) => {
  //   const restructuredData = {
  //     id: rowCount + 1,
  //     first_name: newStudent.first_name,
  //     last_name: newStudent.last_name,
  //     email: newStudent.email,
  //     phone_number: newStudent.phone_number,
  //     // children: [
  //     //   {
  //     //     id: rowCount + 1,
  //     //     first_name: newStudent.first_name_child,
  //     //     last_name: newStudent.last_name_child,
  //     //     gender: newStudent.gender_child,
  //     //     grade: newStudent.grade_child,
  //     //     section: newStudent.section_child,
  //     //     roll_number: newStudent.roll_number_child,
  //     //   },
  //     // ],
  //   };
  //   return restructuredData;
  // };

  const handleAddStudent = () => {
    if (
      !newStudent.first_name ||
      !newStudent.last_name ||
      // !newStudent.email ||
      // !newStudent.phone_number
      // !newStudent.first_name_child ||
      // !newStudent.last_name_child ||
      !newStudent.gender ||
      !newStudent.grade ||
      !newStudent.section ||
      !newStudent.roll_number
    ) {
      alert("Please fill in all required fields before submitting.");
      return;
    }
    // setRows((prevRows) => [
    //   ...prevRows,
    //   {
    //     id: prevRows.length + 1,
    //     ...newStudent,
    //   },
    // ]);
    // console.log(setData(newStudent))
    // handleClose();

    // const restructuredData = restructureData(newStudent);
    // console.log(restructuredData);
    axios
      .post("http://127.0.0.1:8000/api/student/", newStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });

    handleClose();
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/parent/")
      .then((res) => {
        console.log(res.data);
        const transformedData = finalSprid(res.data);
        setRowCount(transformedData.length);
        setRows(transformedData);
      })
      .catch((err) => {
        console.log("err", err);
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
    <>
      <div>
        <div className="h-lvh ">
          <Box
            margin="20px"
            height="calc(100vh - 40px)"
            width="calc(100vw - 40px)"
            sx={{
              // backgroundColor: "#5c7ff7",
              fontWeight: 600,
            }}
          >
            <h1 className="text-center text-pretty font-extrabold text-lg ">
              Manage Student list
            </h1>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Add Student
            </Button>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              editMode="row"
              pagination
            />
          </Box>

          <Dialog
            open={open}
            onClose={handleClose}
            style={{ backgroundColor: "deepskyblue" }}
          >
            <DialogTitle className="text-lg font-extrabold text-center text-white ">
              Add New Student
            </DialogTitle>
            <DialogContent>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  autoFocus
                  margin="dense"
                  // width="50%"
                  label="First Name"
                  style={{
                    marginRight: "20px",
                    display: "inline-block",
                    marginBottom: "25px",
                  }}
                  sx={{ width: "250px", height: "30px", borderRadius: "5px" }}
                  value={newStudent.first_name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, first_name: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  margin="dense"
                  label="Last Name"
                  // width="50%"
                  value={newStudent.last_name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, last_name: e.target.value })
                  }
                />
              </Box>
              {/* <TextField
                autoFocus
                margin="dense"
                label="Email"
                fullWidth
                value={newStudent.email}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, email: e.target.value })
                }
              /> */}
              {/* <TextField
                autoFocus
                margin="dense"
                label="Phone Number"
                fullWidth
                value={newStudent.phone_number}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, phone_number: e.target.value })
                }
              />  */}
              {/* <TextField
                autoFocus
                margin="dense"
                label="Student-first-name"
                // fullWidth
                style={{ marginRight: "20px", marginBottom: "25px" }}
                sx={{ width: "250px", height: "30px", borderRadius: "5px" }}
                value={newStudent.first_name_child}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    first_name_child: e.target.value,
                  })
                }
              /> */}
              {/* <TextField
                autoFocus
                margin="dense"
                label="Student-last-name"
                // fullWidth
                value={newStudent.last_name_child}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    last_name_child: e.target.value,
                  })
                }
              /> */}
              {/* <TextField
                autoFocus
                margin="dense"
                label="genderchild"
                fullWidth
                value={newStudent.gender_child}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, gender_child: e.target.value })
                }
              /> */}
              <Box sx={{ display: "block" }}>
                <TextField
                  select
                  margin="dense"
                  label="Gender"
                  // fullWidth
                  sx={{
                    width: "140px",
                    height: "30px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                  value={newStudent.gender}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, gender: e.target.value })
                  }
                  SelectProps={{
                    multiple: false,
                  }}
                >
                  {["M", "F"].map((G) => (
                    <MenuItem
                      key={G}
                      value={G}
                      style={{ color: "white", backgroundColor: "#0EA5E9" }}
                    >
                      {G}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ display: "inline" }}>
                <TextField
                  select
                  margin="dense"
                  label="Grade"
                  // fullWidth
                  sx={{
                    width: "140px",
                    height: "30px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                    marginRight: "20px",
                  }}
                  value={newStudent.grade}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, grade: e.target.value })
                  }
                  SelectProps={{
                    multiple: false,
                  }}
                >
                  {[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                  ].map((G) => (
                    <MenuItem
                      key={G}
                      value={G}
                      style={{ color: "white", backgroundColor: "#0EA5E9" }}
                    >
                      {G}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  margin="dense"
                  label="section"
                  // fullWidth
                  sx={{
                    width: "140px",
                    height: "30px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                    marginRight: "20px",
                  }}
                  value={newStudent.section}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      section: e.target.value,
                    })
                  }
                  SelectProps={{
                    multiple: false,
                  }}
                >
                  {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                    (section) => (
                      <MenuItem
                        key={section}
                        value={section}
                        style={{ color: "white", backgroundColor: "#0EA5E9" }}
                      >
                        {section}
                      </MenuItem>
                    )
                  )}
                </TextField>
              </Box>

              <TextField
                autoFocus
                margin="dense"
                label="roll_number"
                // fullWidth
                sx={{
                  width: "140px",
                  height: "30px",
                  borderRadius: "5px",
                  marginBottom: "30px",
                }}
                value={newStudent.roll_number}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    roll_number: e.target.value,
                  })
                }
              />
            </DialogContent>
            <DialogActions className="bg-sky-500">
              <Button
                onClick={handleClose}
                style={{
                  width: "100px",
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddStudent}
                style={{
                  width: "100px",
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ManageStudents;
