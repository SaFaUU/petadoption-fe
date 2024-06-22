import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Select, MenuItem, Box, InputLabel, Stack } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

export default function AddPetModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Add New Pet</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Pet Details</DialogTitle>
        <DialogContent
          sx={{
            minWidth: {
              xs: 300,
              sm: 500,
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <Stack direction="row" gap={2}>
              <Box sx={{ flex: 1 }}>
                <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                  Species
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"dog"}
                  label="Species"
                  fullWidth
                  // onChange={handleChange}
                >
                  <MenuItem value={"dog"}>Dog</MenuItem>
                  <MenuItem value={"cat"}>Cat</MenuItem>
                </Select>
              </Box>
              <Box sx={{ flex: 1 }}>
                <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"large"}
                  label="Size"
                  fullWidth
                  // onChange={handleChange}
                >
                  <MenuItem value={"large"}>Large</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"small"}>Small</MenuItem>
                </Select>
              </Box>
            </Stack>
            <Stack direction="row" gap={2}>
              <Box sx={{ flex: 1 }}>
                <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"MALE"}
                  label="Gender"
                  fullWidth
                  // onChange={handleChange}
                >
                  <MenuItem value={"MALE"}>Male</MenuItem>
                  <MenuItem value={"FEMALE"}>Female</MenuItem>
                </Select>
              </Box>
              <Box sx={{ flex: 1 }}>
                <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                  Health Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"EXCELLENT"}
                  label="Size"
                  fullWidth
                  // onChange={handleChange}
                >
                  <MenuItem value={"EXCELLENT"}>Excellent</MenuItem>
                  <MenuItem value={"VERY_GOOD"}>Very Good</MenuItem>
                  <MenuItem value={"GOOD"}>Good</MenuItem>
                  <MenuItem value={"FAIR"}>Fair</MenuItem>
                  <MenuItem value={"POOR"}>Poor</MenuItem>
                </Select>
              </Box>
            </Stack>
            <TextField
              autoFocus
              margin="dense"
              id="breed"
              name="breed"
              label="Breed"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="outlined"
            />

            <TextField
              autoFocus
              margin="dense"
              id="location"
              name="location"
              label="Location"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="temperament"
              name="temperament"
              label="Temperament"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="medicalHistory"
              name="medicalHistory"
              label="Medical History"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="adoptionRequirements"
              name="adoptionRequirements"
              label="Adoption Requirements"
              type="text"
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
