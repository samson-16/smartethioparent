import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard"
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const Result = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        // console.log(response.data);

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <h1 className="text-center shadow-sm text-blue-600 text-normal md:text-xl font-bold">
          Result
        </h1>
      </div>
      <div className="result">
        <div>
          <Button
            onClick={handleOpen}
            style={{
              backgroundColor: "blue",
              width: "10rem",
              color: "white",
              fontWeight: "Bold",
              marginLeft: "2.6rem",
              marginBottom: ".2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon />
            Add Result
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} style={{ backgroundColor: "#80a6ff" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <TextField
                  autoFocus
                  margin="dense"
                  label="Subject"
                  fullWidth
                  InputProps={{
                    style: { color: "white" }, // For input text color
                   // For input placeholder color
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  style={{ borderRadius: '15px' }}
                  // value={newStudent.parentName}
                  // onChange={(e) =>
                  //   // setNewStudent({ ...newStudent, parentName: e.target.value })
                  // }
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Description"
                  fullWidth
                  InputProps={{
                    style: { color: "white" }, // For input text color
              // For input placeholder color
                  }}
                  InputLabelProps={{
                    style: { color: "white" }, // For label color
                  }}
                />
              </Typography>
              <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{mt: 1}}
    >
      Upload file
      <input type="file"accept=".pdf" style={{ display: 'none' }} />
    </Button>
            </Box>
          </Modal>
        </div>
        {/* <Button variant="outlined">Add Result</Button> */}
        {users.map((user) => (
          <ResultCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Result;
