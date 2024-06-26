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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material";

const PetManagement = () => {
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

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const { data: petData } = useGetAllPetsQuery({
    page: page,
    limit: limit,
  });
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
        sx={{ height: `${rows.length ? "auto" : "150px"}` }}
        hideFooter
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(petData.data?.meta?.total / limit)}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </Box>
  );
};

export default PetManagement;
