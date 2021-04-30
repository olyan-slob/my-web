import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";

export const MenuUI = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <Text fontSize="24" fontFamily="heading">
          menu
        </Text>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to="/">About Me</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/tech-stack">Tech Stack</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/education">Education</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/hobby">Hobby</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
