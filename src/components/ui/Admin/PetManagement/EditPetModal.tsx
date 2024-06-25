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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddPetMutation } from "@/redux/api/petApi";
import { useUploadImageMutation } from "@/redux/api/commonApi";
import { toast } from "sonner";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function EditPetModal({ pet }: any) {
  const [open, setOpen] = React.useState(false);
  const [addPet] = useAddPetMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: pet,
  });
  const onSubmit: SubmitHandler<any> = async (data) => {
    data.age = Number(data.age);

    const petAddInfo = await addPet(data).unwrap();
    console.log(petAddInfo);

    if (petAddInfo?.success === true) {
      toast.success("Pet Updated successfully");
      handleClose();
    } else {
      toast.error("Something went wrong");
      handleClose();
    }
  };
  console.log(pet);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={handleClickOpen}>Edit</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
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
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                {...register("name")}
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
                    {...register("species")}
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
                    {...register("size")}
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
                    {...register("gender")}
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
                    {...register("healthStatus")}
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
                label="Breed"
                type="text"
                fullWidth
                variant="outlined"
                {...register("breed")}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="age"
                  label="Age"
                  type="number"
                  fullWidth
                  variant="outlined"
                  {...register("age")}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="location"
                  label="Location"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("location")}
                />
              </Stack>
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                {...register("description")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="adoptionRequirements"
                label="Adoption Requirements"
                type="text"
                fullWidth
                variant="outlined"
                {...register("adoptionRequirements")}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="temperament"
                  label="Temperament"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("temperament")}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="medicalHistory"
                  label="Medical History"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("medicalHistory")}
                />
              </Stack>
            </Box>
          </DialogContent>
          <DialogActions sx={{ mb: 3 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
}
