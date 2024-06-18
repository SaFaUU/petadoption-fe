"use client";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import {
  Box,
  Button,
  Container,
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
    </Container>
  );
};

export default GetAPet;
