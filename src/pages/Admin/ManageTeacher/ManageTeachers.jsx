import * as React from "react";
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
  { field: "id", headerName: "ID", width: 100, editable: true },
  { field: "name", headerName: "Grade", width: 200, editable: true },
  { field: "email", headerName: "Sections", width: 200, editable: true },
  { field: "phone", headerName: "phone", width: 200, editable: true },

];

const ManageTeachers = () => {
  const [rows, setRows] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [newData, setNewData] = React.useState({
    name: "",
    email: "",
    phone: "",

  });
  const handleClose = () => {
    setOpen(false);
    setNewData({
      name: "",
      email: "",
      phone: "",
      
    });
  };

  const handleAddData = () => {
    setRows((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        ...newData,
      },
    ]);
    handleClose();
  };
  return (
    <>
      <div className="h-lvh bg-blue-600">
      <Box
        margin="10px"
        height="calc(100vh - 40px)"
        style={{backgroundColor:'#5c7ff7', color:'#494f63', fontWeight:'bold', fontSize:'15px'}}
      >
        <h1 className="text-center text-white font-extrabold text-lg ">Manage Teachers</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Teacher
        </Button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </Box>
      <Dialog open={open} onClose={handleClose}
        style={{ backgroundColor: "deepskyblue" }}>
        <DialogTitle className="text-lg font-extrabold text-center text-white bg-sky-500">Add New Teacher</DialogTitle>
        <DialogContent  className="bg-sky-500 ">
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            fullWidth
            value={newData.email}
            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            label="phone number"
            fullWidth
            value={newData.phone}
            onChange={(e) => setNewData({ ...newData, phone: e.target.value })}
          />
            <TextField
            select
            margin="dense"
            label="Grade"
            fullWidth
            value={newData.Grade}
            onChange={(e) =>
              setNewData({ ...newData, Grade: e.target.value })
            }
            SelectProps={{
              multiple: false,
            }}
          >
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
              (grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              )
            )}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Sections"
            fullWidth
            value={newData.Section}
            onChange={(e) =>
              setNewData({ ...newData, Section: e.target.value })
            }
            SelectProps={{
              multiple: false,
            }}
          >
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
              (section) => (
                <MenuItem key={section} value={section}>
                  {section}
                </MenuItem>
              )
            )}
          </TextField>

          <TextField
            select
            margin="dense"
            label="Subjects"
            fullWidth
            value={newData.Subject}
            onChange={(e) =>
              setNewData({ ...newData, Subject: e.target.value })
            }
            SelectProps={{
              multiple: false,
            }}
          >
            {["English", "Math", "Science", "Social Studies", "Art"].map(
              (subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              )
            )}
          </TextField>
        </DialogContent>
        <DialogActions  className="bg-sky-500 ">
          <Button onClick={handleClose}    style={{
              width: "100px",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "500",
            }}>Cancel</Button>
          <Button onClick={handleAddData}    style={{
              width: "100px",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "500",
            }}>Add</Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  );
};
export default ManageTeachers;
