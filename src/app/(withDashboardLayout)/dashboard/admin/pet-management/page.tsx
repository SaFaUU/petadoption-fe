"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSession } from "next-auth/react";
import {
  useChangeRoleMutation,
  useChangeStatusMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import Loader from "@/components/ui/shared/Loader/Loader";
import AddPetModal from "@/components/ui/Admin/PetManagement/AddPetModal";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import { toast } from "sonner";
import EditPetModal from "@/components/ui/Admin/PetManagement/EditPetModal";

const PetManagement = () => {
  const [changeRole] = useChangeRoleMutation();
  const [changeStatus] = useChangeStatusMutation();
  const [deletePet] = useDeletePetMutation();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "breed",
      headerName: "Breed",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },
    {
      field: "size",
      headerName: "Size",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: ({ row }) => {
        return <EditPetModal pet={row} />;
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={async () => {
              const res = await deletePet(row.id);
              if (res?.data?.success === true) {
                toast.success("Pet deleted successfully");
              }
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const { data: petData } = useGetAllPetsQuery({});
  console.log(petData);
  const rows = petData?.data?.data;
  // console.log(rows);

  if (!petData) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <AddPetModal />
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{ minHeight: "150px" }}
        rowHeight={80}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Box>
  );
};

export default PetManagement;
