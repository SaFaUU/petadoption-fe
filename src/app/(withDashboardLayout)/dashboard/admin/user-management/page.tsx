"use client";
import {
  Box,
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

const UserManagement = () => {
  const [changeRole] = useChangeRoleMutation();
  const [changeStatus] = useChangeStatusMutation();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Full name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row }) => {
        console.log(row);
        return (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={row.role}
            // onChange={handleChange}
            fullWidth
            size="small"
            sx={{
              maxWidth: "200px",
            }}
            onChange={(e) => {
              changeRole({ id: row.id, role: e.target.value });
            }}
          >
            <MenuItem value={"USER"}>User</MenuItem>
            <MenuItem value={"ADMIN"}>Admin</MenuItem>
          </Select>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row }) => {
        console.log(row);
        return (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={row.status}
            // onChange={handleChange}
            fullWidth
            size="small"
            sx={{
              maxWidth: "200px",
            }}
            onChange={(e) => {
              changeStatus({ id: row.id, status: e.target.value });
            }}
          >
            <MenuItem value={"ACTIVE"}>Active</MenuItem>
            <MenuItem value={"DEACTIVATED"}>Deactive</MenuItem>
          </Select>
        );
      },
    },
  ];

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
        rowHeight={80}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Box>
  );
};

export default UserManagement;
