import * as React from "react";
import { useState } from "react";
//MUI COMPONENETS
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FlagIcon from "@mui/icons-material/Flag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BlockIcon from "@mui/icons-material/Block";

export default function SubMenuForPosts() {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const toggleMenu = (event) => {
    if (open) {
      setOpen(false);
      setAnchor(null);
    } else {
      setAnchor(event.currentTarget);
      setOpen(true);
    }
  };
  return (
    <section>
      <MoreHorizIcon onClick={toggleMenu} />
      <Menu open={open} onClose={toggleMenu} anchorEl={anchor}>
        <MenuItem onClick={toggleMenu}>
          <FlagIcon />
          &nbsp; Report post
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <BookmarkIcon />
          &nbsp; Save post
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <BlockIcon />
          &nbsp; Not interested
        </MenuItem>
      </Menu>
    </section>
  );
}
