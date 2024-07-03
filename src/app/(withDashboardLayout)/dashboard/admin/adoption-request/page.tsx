"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
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
import {
  useChangeAdoptionStatusMutation,
  useGetAllAdoptionRequestsQuery,
} from "@/redux/api/adoptionRequestApi";

const AdoptionRequest = () => {
  const [changeAdoptinStatus] = useChangeAdoptionStatusMutation();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "petSpecies",
      headerName: "Species",
      flex: 1,
      renderCell: (params: any) => {
        return params.row.pet.species;
      },
    },
    {
      field: "petName",
      headerName: "Pet Name",
      flex: 1,
      renderCell: (params: any) => {
        return params.row.pet.name;
      },
    },
    {
      field: "userName",
      headerName: "User Name",
      flex: 1,
      renderCell: (params: any) => {
        return params.row.user.name;
      },
    },
    {
      field: "petStatus",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        return (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={params.row.status}
            // onChange={handleChange}
            fullWidth
            size="small"
            sx={{
              maxWidth: "200px",
            }}
            onChange={async (e) => {
              const res: any = await changeAdoptinStatus({
                id: params.row.id,
                data: {
                  status: e.target.value,
                },
              }).unwrap();
              if (res.success === true) {
                toast.success("Status updated successfully");
              } else {
                toast.error("Something went wrong");
              }
            }}
          >
            <MenuItem value={"PENDING"}>Pending</MenuItem>
            <MenuItem value={"APPROVED"}>Approved</MenuItem>
            <MenuItem value={"REJECTED"}>Rejected</MenuItem>
          </Select>
        );
      },
    },
  ];

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const { data: petData } = useGetAllAdoptionRequestsQuery({
    page: page,
    limit: limit,
  });

  const rows = petData?.data?.data;

  //

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

export default AdoptionRequest;
