import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const StatusMenu = ({ setStatusFilter }:any) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Select status
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setStatusFilter("All")}>All</MenuItem>
        <MenuItem onClick={() => setStatusFilter("To Do")}>To Do</MenuItem>
        <MenuItem onClick={() => setStatusFilter("In Progress")}>
          In Progress
        </MenuItem>
        <MenuItem onClick={() => setStatusFilter("Done")}>Done</MenuItem>
        <MenuItem onClick={() => setStatusFilter("Failed")}>Failed</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default StatusMenu;
