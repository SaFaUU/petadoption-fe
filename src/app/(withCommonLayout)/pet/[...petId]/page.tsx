"use client";
import { useGetSinglePetQuery } from "@/redux/api/petApi";
import React from "react";
import PetSlider from "../../../../components/ui/GetaPet/PetSlider/PetSlider";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useMyAdoptionRequestQuery } from "@/redux/api/adoptionRequestApi";

const PetDetails = ({ params }: { params: { petId: string } }) => {
  const [petDetails, setPetDetails] = React.useState<any>();

  const { data: petData } = useGetSinglePetQuery(params.petId);

  const { data: myPets } = useMyAdoptionRequestQuery({});

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: petDetails,
  });

  React.useEffect(() => {
    setPetDetails(petData?.data);
    reset(petData?.data);
  }, [petData?.data, reset]);

  return (
    <Container>
      {petData?.data?.imageUrl && (
        <PetSlider imageUrl={petData?.data?.imageUrl} />
      )}
      <Grid container my={5}>
        <Grid item xs={12} md={9}>
          <form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={petDetails?.name}
                key={petDetails?.name}
                disabled
              />
              <Stack direction="row" gap={2}>
                <Box sx={{ flex: 1 }}>
                  <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                    Species
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Species"
                    fullWidth
                    key={petDetails?.species}
                    defaultValue={petDetails?.species}
                    disabled
                  >
                    <MenuItem value={"DOG"}>Dog</MenuItem>
                    <MenuItem value={"CAT"}>Cat</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <InputLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={petDetails?.size}
                    label="Size"
                    fullWidth
                    key={petDetails?.size}
                    disabled
                  >
                    <MenuItem value={"LARGE"}>Large</MenuItem>
                    <MenuItem value={"MEDIUM"}>Medium</MenuItem>
                    <MenuItem value={"SMALL"}>Small</MenuItem>
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
                    defaultValue={petDetails?.gender}
                    label="Gender"
                    fullWidth
                    key={petDetails?.gender}
                    disabled
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
                    defaultValue={petDetails?.healthStatus}
                    label="Size"
                    fullWidth
                    key={petDetails?.healthStatus}
                    disabled
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
                key={petDetails?.breed}
                disabled
                defaultValue={petDetails?.breed}
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
                  key={petDetails?.age}
                  disabled
                  defaultValue={petDetails?.age}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="location"
                  label="Location"
                  type="text"
                  fullWidth
                  variant="outlined"
                  key={petDetails?.location}
                  disabled
                  defaultValue={petDetails?.location}
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
                key={petDetails?.description}
                disabled
                defaultValue={petDetails?.description}
              />
              <TextField
                autoFocus
                margin="dense"
                id="adoptionRequirements"
                label="Adoption Requirements"
                type="text"
                fullWidth
                variant="outlined"
                key={petDetails?.adoptionRequirements}
                disabled
                defaultValue={petDetails?.adoptionRequirements}
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
                  key={petDetails?.temperament}
                  disabled
                  defaultValue={petDetails?.temperament}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="medicalHistory"
                  label="Medical History"
                  type="text"
                  fullWidth
                  variant="outlined"
                  key={petDetails?.medicalHistory}
                  disabled
                  defaultValue={petDetails?.medicalHistory}
                />
              </Stack>
            </Box>
          </form>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            px: {
              md: 0,
              lg: 5,
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: {
                sm: 5,
                md: 0,
              },
            }}
            disabled={myPets?.data?.data?.some(
              (pet: any) => pet.petId === params.petId[0]
            )}
          >
            <Link
              href={`/adoption-request/${params.petId}`}
              style={{ width: "100%", textDecoration: "none", color: "white" }}
            >
              Adopt Now
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
