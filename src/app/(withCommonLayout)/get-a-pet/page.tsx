"use client";
import PetCard from "@/components/ui/GetaPet/PetCard";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const GetAPet = () => {
  const [size, setSize] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [page, setPage] = React.useState(1);

  const { data } = useGetAllPetsQuery({
    page: page,
    limit: 6,
  });

  return (
    <Container>
      <Box my={5} sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={"bold"} color={"primary.main"}>
          Get a Pet
        </Typography>
        <Typography variant="body1">
          Search by breed, pet type, age or location and Get your favourite pet.
        </Typography>
      </Box>
      <Box my={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" gap={2}>
          <FormControl fullWidth sx={{ minWidth: "100px" }}>
            <InputLabel id="size-select-label">Size</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={size}
              label="Size"
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value={"LARGE"}>Large</MenuItem>
              <MenuItem value={"MEDIUM"}>Medium</MenuItem>
              <MenuItem value={"SMALL"}>Small</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ minWidth: "100px" }}>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"MALE"}>Male</MenuItem>
              <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ minWidth: "100px" }}>
            <InputLabel id="species-select-label">Species</InputLabel>
            <Select
              labelId="species-select-label"
              id="species-select"
              value={species}
              label="Gender"
              onChange={(e) => setSpecies(e.target.value)}
            >
              <MenuItem value={"DOG"}>Dog</MenuItem>
              <MenuItem value={"CAT"}>CAT</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Search</Button>
        </Stack>
      </Box>
      <Grid my={5} container spacing={2}>
        {data?.data?.data?.map((pet: any) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <PetCard key={pet.id} pet={pet} />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Pagination
          count={Math.ceil(data?.data?.meta?.total / data?.data?.meta?.limit)}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </Container>
  );
};

export default GetAPet;
