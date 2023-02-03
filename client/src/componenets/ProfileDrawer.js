import React, { useState } from "react";
//MUI COMPONENETS
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { UserButton, UserProfile } from "@clerk/clerk-react";
import { Avatar } from "@mui/material";
//CLERK PACKAGES
import { useUser, useClerk } from "@clerk/clerk-react";

export default function ProfileDrawer() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();
  // Function to toggle the drawer open or closed
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="position-fixed">
      <div className="p-5  m-5 custom-profile-card">
        <Avatar
          src={user.profileImageUrl}
          sx={{ height: 80, width: 80, margin: "auto", cursor: "pointer" }}
          onClick={toggleDrawer(true)}
        />
        {<span>{user.primaryEmailAddress.emailAddress}</span>}
        <br />
        {/* Check if the username is empty and display appropriate content */}
        {user.username ? (
          <b> {user.username}</b>
        ) : (
          <a
            style={{ textDecoration: "underline", color: "blue" }}
            onClick={toggleDrawer(true)}
          >
            Set your user name
          </a>
        )}

        <br />
        <Button className="mt-3" onClick={toggleDrawer(true)}>
          See full profile
        </Button>
        <br />
        <Button className="text-danger" onClick={() => signOut()}>
          LogOut
        </Button>
      </div>

      <Drawer anchor="right" open={open}>
        <Button className="custom-close-button" onClick={closeDrawer}>
          <CloseIcon />
        </Button>
        <UserProfile />
      </Drawer>
    </div>
  );
}
