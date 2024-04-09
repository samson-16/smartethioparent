import React from "react";
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
const columns = [
  { field: "id", headerName: "ID", width: 90, editable: true },
  {
    field: "studentName",
    headerName: "Student Name",
    width: 200,
    editable: true,
  },
  { field: "grade", headerName: "Grade", width: 100, editable: true },
  { field: "section", headerName: "Section", width: 100, editable: true },
  {
    field: "parentName",
    headerName: "Parent's Name",
    width: 200,
    editable: true,
  },
  {
    field: "parentEmail",
    headerName: "Parent's Email",
    width: 200,
    editable: true,
  },
  {
    field: "Phone",
    headerName: "Parent's PhoneNum",
    width: 200,
    editable: true,
  },
];

const ManageStudents = () => {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      studentName: "Samuel Kebede",
      grade: "Grade 1",
      section: "A",
      parentName: "kebede Derejaw",
      parentEmail: "kebede@example.com",
      Phone: "098765",
    },
    {
      id: 2,
      studentName: "Natnael Alemu",
      grade: "Grade 2",
      section: "B",
      parentName: "Alemu wuletaw",
      parentEmail: "Alemu@example.com",
      Phone: "098765",
    },
  ]);

  const [open, setOpen] = React.useState(false);
  const [newStudent, setNewStudent] = React.useState({
    studentName: "",
    grade: "",
    section: "",
    parentName: "",
    parentEmail: "",
    Phone: "",
  });

  const handleClose = () => {
    setOpen(false);
    setNewStudent({
      studentName: "",
      grade: "",
      section: "",
      parentName: "",
      parentEmail: "",
      Phone: "",
    });
  };

  const handleAddStudent = () => {
    if (!newStudent.studentName || !newStudent.grade || !newStudent.section || 
      !newStudent.parentName || !newStudent.parentEmail || !newStudent.Phone) {
      alert("Please fill in all required fields before submitting.");
      return;
    }
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        ...newStudent,
      },
    ]);
    handleClose();
  };

  return (
    <>
      <div>
        <div className="h-lvh bg-blue-600">
          <Box
            margin="20px"
            height="calc(100vh - 40px)"
            width="calc(100vw - 40px)"
            sx={{
              backgroundColor: "#5c7ff7",
              fontWeight: 600, 
            }}
          >
            <h1 className="text-center text-white font-extrabold text-lg ">
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
            <DialogTitle className="text-lg font-extrabold text-center text-white bg-sky-500">
              Add New Student
            </DialogTitle>
            <DialogContent className="bg-sky-500 ">
              <TextField
                autoFocus
                margin="dense"
                label="Student Name"
                fullWidth
                value={newStudent.studentName}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, studentName: e.target.value })
                }
              />

              <TextField
                select
                margin="dense"
                label="Grade"
                fullWidth
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
                  <MenuItem key={G} value={G}
                  style={{ color: "white", backgroundColor: "#0EA5E9" }}>
                    {G}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                margin="dense"
                label="section"
                fullWidth
                value={newStudent.section}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, section: e.target.value })
                }
                SelectProps={{
                  multiple: false,
                }}
              >
                {[
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "J",
                  "K",
                  "L",
                ].map((section) => (
                  <MenuItem
                    key={section}
                    value={section}
                    style={{ color: "white", backgroundColor: "#0EA5E9" }}
                  >
                    {section}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                autoFocus
                margin="dense"
                label="Parent's Name"
                fullWidth
                value={newStudent.parentName}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, parentName: e.target.value })
                }
              />
              <TextField
                autoFocus
                margin="dense"
                label="Parent's Email"
                fullWidth
                value={newStudent.parentEmail}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, parentEmail: e.target.value })
                }
              />
              <TextField
                autoFocus
                margin="dense"
                label="Parent's Phone Number"
                fullWidth
                value={newStudent.Phone}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, Phone: e.target.value })
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
