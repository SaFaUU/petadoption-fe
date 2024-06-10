"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./NavigationBar.css";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Get a Pet",
    path: "/get-a-pet",
  },
];
const settings = [
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

function NavigationBar() {
  const session = useSession();
  console.log(session);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        boxShadow: "none",
        // backgroundColor: "white"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters style={{ height: "80px", boxShadow: "none" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link
              href={`/`}
              style={{
                textDecoration: "none",
                display: "flex",
                // gap: "5px",
                alignItems: "center",
              }}
            >
              <Image src={logo} alt="logo" width={90} height={90} />
              {/* <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                PETADOPTION
              </Typography> */}
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link href={`/`}>
              <Image src={logo} alt="logo" width={80} height={80} />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "20px",
              marginRight: "40px",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.title}
                href={page.path}
                style={{
                  textDecoration: "none",
                  gap: "10px",
                  color: "black",
                  fontWeight: "bold",
                }}
                className={`navLinkTag ${
                  pathName === page.path ? "active" : ""
                }`}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          {session?.data?.user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    signOut();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, gap: "10px" }}
            >
              <Link href="/signin" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    borderColor: "primary.main",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      opacity: [0.8],
                    },
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
