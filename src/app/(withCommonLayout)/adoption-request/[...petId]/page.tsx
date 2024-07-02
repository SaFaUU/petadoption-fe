"use client";
import { useSubmitAdoptionRequestMutation } from "@/redux/api/adoptionRequestApi";
import { useGetSinglePetQuery } from "@/redux/api/petApi";
import { useGetProfileQuery } from "@/redux/api/userApi";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AdoptionRequest = ({ params }: { params: { petId: string } }) => {
  const [userProfile, setUserProfile] = React.useState<any>();

  const { data: petData } = useGetSinglePetQuery(params.petId);
  const { data: userData } = useGetProfileQuery({});

  const [submitAdoptionRequest] = useSubmitAdoptionRequestMutation();
  const router = useRouter();

  React.useEffect(() => {
    setUserProfile(userData?.data);
  }, [userData?.data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (!data.terms) {
      toast.error("Please accept terms and conditions");
      return;
    }

    const res = await submitAdoptionRequest({
      petId: params.petId[0],
    }).unwrap();

    if (res.success === true) {
      toast.success("Adoption request submitted successfully");
      router.push("/get-a-pet");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
          width: "400px",
          // height: "400px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
        >
          Adoption Request Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              defaultValue={userProfile?.email}
              {...register("email")}
              type="email"
              disabled
              key={userProfile?.email}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name")}
              type="text"
              defaultValue={userProfile?.name}
              disabled
              key={userProfile?.name}
            />
          </Stack>
          <Box bgcolor={"lightgrey"} p={2} mt={2} borderRadius={"10px"}>
            <Stack direction="column" spacing={2}>
              <TextField
                id="outlined-basic"
                label="Pet Name"
                variant="outlined"
                defaultValue={petData?.data?.name}
                {...register("email")}
                type="email"
                disabled
                key={petData?.data?.name}
              />
              <TextField
                id="outlined-basic"
                label="Species"
                variant="outlined"
                {...register("name")}
                type="text"
                defaultValue={petData?.data?.species}
                disabled
                key={petData?.data?.species}
              />
            </Stack>
          </Box>
          <FormGroup sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Checkbox {...register("terms")} />}
              label="I agree to the terms and conditions"
            />
          </FormGroup>
          <Button type="submit" fullWidth sx={{ my: 2 }}>
            Submit Request
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AdoptionRequest;
