"use client";
import PetCard from "@/components/ui/GetaPet/PetCard";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const GetAPet = () => {
  const [age, setAge] = React.useState("");

  const { data } = useGetAllPetsQuery({});
  console.log(data);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ width: "200px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
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
    </Container>
  );
};

export default GetAPet;
