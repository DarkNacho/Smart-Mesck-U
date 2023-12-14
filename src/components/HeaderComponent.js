import { useCallback } from "react";
import { Button } from "@mui/material";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const onUserContainerClick = useCallback(() => {
    window.location.href = "http://www.google.com";
  }, []);

  return (
      <ul className="items">
        <ul className="menulegacy">
          <Button className="menu-item" color="primary" variant="text">
            Consultas
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Pacientes
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Practicantes
          </Button>
          <Button className="menu-item" color="primary" variant="text">
            Formularios
          </Button>
        </ul>
        <Button
          className="button"
          sx={{ width: 64 }}
          color="primary"
          variant="contained"
          href="www.google.com"
        >
          Salir
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

export default HeaderComponent;
