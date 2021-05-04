import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuUI = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <Text fontSize="24" fontFamily="heading">
          menu
        </Text>
      </MenuButton>
      <MenuList>
        <Link to="/">
          <MenuItem>About Me</MenuItem>
        </Link>
        <Link to="/projects">
          <MenuItem>Projects</MenuItem>
        </Link>
        <Link to="/tech-stack">
          <MenuItem>Tech Stack</MenuItem>
        </Link>
        <Link to="/hobby">
          <MenuItem>Hobby</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
