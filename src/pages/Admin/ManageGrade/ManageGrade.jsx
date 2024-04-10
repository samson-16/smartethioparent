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
  { field: "grade", headerName: "Grade", width: 150, editable: true },
  { field: "sections", headerName: "sections", width: 150, editable: true },
  { field: "subjects", headerName: "subjects", width: 200, editable: true },
];

export default function ManageData() {
  const [data, setData] = React.useState([
    {
      id: 1,
      grade: "Grade 1",
      sections: ["A", "B", "C", "D"],
      subjects: ["English", "Math", "Science"],
    },
    {
      id: 2,
      grade: "Grade 2",
      sections: ["A", "B", "C"],
      subjects: ["Social Studies", "Art"],
    },
  ]);
  const [open, setOpen] = React.useState(false);
  const [newData, setNewData] = React.useState({
    grade: "",
    sections: [],
    subjects: [],
  });

  const handleClose = () => {
    setOpen(false);
    setNewData({
      grade: "",
      sections: [],
      subjects: [],
    });
  };

  const handleAddData = () => {
    setData((prevData) => [
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
      
      <section className="h-lvh bg-blue-600">
        <Box
          margin="10px"
          height="calc(100vh - 40px)"
          style={{
            backgroundColor: "#5c7ff7",
            color: "#494f63",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add Data
          </Button>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          style={{ backgroundColor: "deepskyblue" }}
        >
          <DialogTitle className="text-lg font-extrabold text-center text-white bg-sky-500">
            Add New Data
          </DialogTitle>
          <DialogContent className="bg-sky-500 ">
            <TextField
              autoFocus
              margin="dense"
              label="Grade"
              fullWidth
              value={newData.grade}
              onChange={(e) =>
                setNewData({ ...newData, grade: e.target.value })
              }
            />
            <TextField
              select
              margin="dense"
              label="Sections"
              fullWidth
              value={newData.sections}
              onChange={(e) =>
                setNewData({ ...newData, sections: e.target.value })
              }
              SelectProps={{
                multiple: true,
              }}
            >
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
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
            <TextField
              select
              margin="dense"
              label="Subjects"
              fullWidth
              value={newData.subjects}
              onChange={(e) =>
                setNewData({ ...newData, subjects: e.target.value })
              }
              SelectProps={{
                multiple: true,
              }}
            >
              {["English", "Math", "Science", "Social Studies", "Art"].map(
                (subject) => (
                  <MenuItem
                    key={subject}
                    value={subject}
                    style={{ color: "white", backgroundColor: "#0EA5E9" }}
                  >
                    {subject}
                  </MenuItem>
                )
              )}
            </TextField>
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
              onClick={handleAddData}
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
      </section>
    </>
  );
}
