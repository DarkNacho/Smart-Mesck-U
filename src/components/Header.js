import { useCallback } from "react";
import { Button } from "@mui/material";
import "./Header.css";

const Header = () => {
  const onUserContainerClick = useCallback(() => {
    window.location.href = "http://www.google.com";
  }, []);

  return (
      <ul className="items">
        <ul className="menulegacy">
          <Button className="menu-item" color="primary" variant="text">
            Encounters
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Patients
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Practitioners
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Questionnaires
          </Button>
        </ul>
        <Button
          className="button"
          sx={{ width: 64 }}
          color="primary"
          variant="contained"
          href="www.google.com"
        >
          Logout
        </Button>
        <div className="user">
          <div className="user1" onClick={onUserContainerClick}>
            <img className="avatarimage-icon" alt="" src="/avatarimage.svg" />
            <div className="username-placeholder">Alex Smith</div>
          </div>
        </div>
        <img
          className="smart-mesck-blanco-6"
          alt=""
          src="/smart-mesck-blanco-6@2x.png"
        />
      </ul>
  );
};

export default Header;
