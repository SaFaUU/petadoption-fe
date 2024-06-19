"use client";
import { Box, Container } from "@mui/material";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSession } from "next-auth/react";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import Loader from "@/components/ui/shared/Loader/Loader";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Full name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "role", headerName: "Role", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
];

const UserManagement = () => {
  // const session = useSession();
  // console.log(session?.data?.user);

  const { data: usersData } = useGetAllUsersQuery({});
  const rows = usersData?.data;
  // console.log(rows);

  if (!usersData) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Box>
  );
};

export default UserManagement;
