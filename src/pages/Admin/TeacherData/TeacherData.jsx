import React,{useState, useEffect} from 'react'

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
    { field: "first_name", headerName: "First-name", width: 100, editable: true },
    { field: "last_name", headerName: "Last-name", width: 100, editable: true },
    { field: "email", headerName: "email", width: 200, editable: true },
    { field: "phone", headerName: "phone", width: 140, editable: true },

    ];
const TeacherData = () => {
    const [data, setData] = useState([
        {
          id: 1,
          first_name: "Grade 1",
          last_name: ["A", "B", "C", "D"],
          email: ["English", "Math", "Science"],
          phone: ["English", "Math", "Science"],

        },
        {
          id: 2,
          grade: "Grade 2",
          sections: ["A", "B", "C"],
          subjects: ["Social Studies", "Art"],
        },
      ]);
     const [open, setOpen] = React.useState(false);

        const [newTeacher, setNewTeacher] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        });


  return (
    <div>
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
              Teacher Data
            </h1>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Add new teacher
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
    </div>
  )
}

export default TeacherData