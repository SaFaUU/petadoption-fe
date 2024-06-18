"use client";
import React from "react";
import {
  Container,
  Box,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import avatar from "@/assets/static/avatar.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Inputs = {
  id: string;
  name: string;
  email: string;
};

const Profile = () => {
  const { data: userInfo } = useGetProfileQuery({});
  console.log(userInfo?.data);

  const [updateProfile] = useUpdateProfileMutation();
  const router = useRouter();

  let user: any = userInfo?.data;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userData = {
      id: user.id,
      name: data.name,
      email: data.email,
    };

    const res = await updateProfile(userData).unwrap();
    console.log(res);

    if (res?.success === true) {
      toast.success("Profile updated successfully");
      router.refresh();
    } else {
      toast.error(`${res?.error?.data?.message}`);
    }
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={4}
          sx={{
            minWidth: {
              xs: "300px",
              sm: "400px",
              md: "500px",
              lg: "600px",
            },
          }}
        >
          <Image src={avatar} alt="avatar" width={200} height={200} />
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            defaultValue={user?.id}
            fullWidth
            disabled
            key={user?.id}
            {...register("id")}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            defaultValue={user?.name}
            fullWidth
            key={user?.name}
            {...register("name")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            defaultValue={user?.email}
            fullWidth
            key={user?.email}
            {...register("email")}
          />
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Profile;
