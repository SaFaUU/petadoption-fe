"use client";
import AdoptedPetCard from "@/components/ui/AdoptedPets/AdoptedPetCard";
import { useMyAdoptionRequestQuery } from "@/redux/api/adoptionRequestApi";
import { Container, Grid } from "@mui/material";
import React from "react";

const AdoptedPets = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(6);
  const { data } = useMyAdoptionRequestQuery({
    page: page,
    limit: limit,
  });
  console.log(data?.data);

  return (
    <Container>
      <Grid container spacing={2}>
        {data?.data?.data?.map((pet: any, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AdoptedPetCard key={pet.id} petData={pet} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AdoptedPets;
