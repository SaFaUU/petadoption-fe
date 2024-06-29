import Person2Icon from "@mui/icons-material/Person2";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import KeyIcon from "@mui/icons-material/Key";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import InventoryIcon from "@mui/icons-material/Inventory";

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export const drawerItems = (role: string): DrawerItem[] => {
  const roleMenu: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "My Profile",
      path: `/dashboard/profile/${role && role.toLowerCase()}`,
      icon: Person2Icon,
    },
    {
      title: "Change password",
      path: `/dashboard/change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case "ADMIN":
      roleMenu.push(
        {
          title: "User Management",
          path: `/dashboard/admin/user-management`,
          icon: GroupIcon,
        },
        {
          title: "Pet Management",
          path: `/dashboard/admin/pet-management`,
          icon: PetsIcon,
        }
      );
      break;
    case "USER":
      roleMenu.push({
        title: "My Adopted Pets",
        path: `/dashboard/user/adopted-pets`,
        icon: InventoryIcon,
      });
      break;
    default:
      break;
  }

  return [...roleMenu, ...defaultMenus];
};
