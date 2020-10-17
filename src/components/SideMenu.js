import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/capture">Capture bird</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/library">Bird library</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}
