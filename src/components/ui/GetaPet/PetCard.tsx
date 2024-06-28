import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

export default function PetCard({ pet }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={pet.imageUrl[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Stack direction="row" gap={1}>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            {pet.species}
          </Box>
          <Box
            sx={{
              backgroundColor: "#023047",
              color: "white",
              borderRadius: "6px",
              p: 1,
              textAlign: "center",
            }}
          >
            {pet.size}
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
