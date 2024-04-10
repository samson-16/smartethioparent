import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import { ClassNames } from "@emotion/react";

const columns = [
    
  { field: "id", headerName: "ID", width: 100  },
  { field: "name", headerName: "name", width: 150 },
  { field: "email", headerName: "email", width: 150 },
  { field: "phone", headerName: "phone", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,

        
        //   <Button
        //     variant="contained"
        //     color="primary"
        //     size="small"
        //     style={{ marginLeft: 16 }}
        //     onClick={() => handleEdit(params.row.id)}
        //   >
        //     Edit
        //   </Button>
        //   <Button
        //     variant="contained"
        //     color="secondary"
        //     size="small"
        //     style={{ marginLeft: 16 }}
        //     // onClick={() => handleDelete(params.row.id)}
        //   >
        //     Delete
        //   </Button>
    
    
    
  },
];

const ManageUser = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setRows(res.data))
      .then((err) => console.log(err));
  }, []);


  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleClose = () => {
    setOpen(false);
    setNewUser({
      name: '',
      email: '',
      phone: '',
    });
  };

const handleAddUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setRows([...rows, { ...newUser, id: res.data.id }]);
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  
//   const handleEdit = (id) => {
//     axios
//       .put(`https://jsonplaceholder.typicode.com/users/${id}`, newUser)
//       .then((res) => {
//         console.log("User updated successfully:", res.data);
//         handleClose(); // Close dialog or perform any other actions as needed
//       })
//       .catch((err) => console.log(err));
//   };
const handleEdit = (id) => {
    // Implement your edit logic here
    console.log("Edit user with ID:", id);
  };

    // const handleDelete = (id) => {
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => {
    //     setRows(rows.filter((row) => row.id !== id));
    //   })
    //   .catch((err) => console.log(err));
    // }
  return (
    <>
    <div className="bg-blue-700">
    <div className="flex justify-center font-extrabold mt-2 text-lg">User list</div>
    <Box
      bgcolor="blue-500"
      color="#333"
      margin="20px"
      height="calc(100vh - 40px)"
      fontSize="16px"
      fontWeight="bold"
    >
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add User
      </Button>
      <DataGrid
   
        rows={rows}
        columns={columns}
        pageSize={5}
        // checkboxSelection
        editMode="row"
        pagination
        headerClassName="font-extrabold bg-blue-700 text-white text-lg"
        style={{ height: "100%", width: "100%", marginTop: "10px", fontSize: "16px", fontWeight: "bold", color: "white"}}
        />
    </Box>

    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="User Name"
            fullWidth
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
           <TextField
            autoFocus
            margin="dense"
            label="email"
            fullWidth
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
           <TextField
            autoFocus
            margin="dense"
            label="phone"
            fullWidth
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddUser}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
   </>
  );
};

export default ManageUser;
