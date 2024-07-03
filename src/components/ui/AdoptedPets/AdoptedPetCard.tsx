import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function AdoptedPetCard({ petData }: any) {
  console.log(petData);
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
        image={petData?.pet?.imageUrl[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {petData?.pet?.name}
        </Typography>
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
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
              Adopted At: {petData?.pet?.updatedAt.slice(0, 10)}
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
              Location: {petData?.pet?.location}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: `${
              petData?.status == "APPROVED" ? "green" : "red"
            }`,
          }}
        >
          {petData?.status}
        </Button>
        <Link
          href={`/pet/${petData?.pet?.id}`}
          style={{ width: "100%", flex: 1 }}
        >
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
