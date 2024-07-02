import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function PetCard({ pet }: any) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        border: "1px solid #a3cfe6",
        p: 1,
      }}
    >
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
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          <Box
            sx={{
              backgroundColor: "secondary.dark",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              alignItems: "center",
              margin: "auto 0",
            }}
          >
            <Typography fontSize={"10px"} whiteSpace={"nowrap"}>
              Pet Type: {pet.species}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#023047",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            <Typography fontSize={"10px"} whiteSpace={"nowrap"}>
              Size: {pet.size}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            <Typography fontSize={"10px"} whiteSpace={"nowrap"}>
              Age: {pet.age}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            <Typography fontSize={"10px"} whiteSpace={"nowrap"}>
              Breed: {pet.breed}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "text.primary",
              color: "white",
              borderRadius: "6px",
              px: 2,
              py: 1,
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            <Typography fontSize={"10px"} whiteSpace={"nowrap"}>
              Location: {pet.location}
            </Typography>
          </Box>
        </Stack>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            {pet.description.slice(0, 40) + "..."}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link href={`/pet/${pet.id}`} style={{ width: "100%" }}>
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "text.primary" }}
          >
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
