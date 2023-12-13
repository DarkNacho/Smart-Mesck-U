import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Modal,
} from "@mui/material";

import React, { useState, useRef  } from 'react';
import "./AddPatienteComponent.css";

const AddPatienteComponent = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    segundoNombre: '',
    apellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    genero: '',
    rut: '',
    numeroTelefonico: '',
  });

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const showDataConsole = () => {
    console.log(formData)
  }

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales antes de enviar el formulario

    // Enviar el formulario llamando a la función submit() del elemento del formulario
    if (formRef.current) {
      formRef.current.submit();
    }
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={openModal}>
      añadir paciente
      </Button>

    <Modal className="modal-content" open={open} onClose={closeModal}>
      <div className="addpatientecomponent">
        <div className="header">
          <div className="aadir-paciente">Añadir Paciente</div>
          <img className="close-icon" alt="" src="/close@2x.png" onClick={closeModal}/>
        </div>
        <div className="content">
          <form className="patientform" ref={formRef} onSubmit={handleSubmit}>
            <TextField
              className="frame"
              color="primary"
              label="Nombre"
              placeholder="Noah"
              variant="outlined"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Segundo Nombre"
              placeholder="James"
              variant="outlined"
              name="segundoNombre"
              value={formData.segundoNombre}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Apellido"
              placeholder="Brown"
              variant="outlined"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Segundo Apellido"
              placeholder="Brown"
              variant="outlined"
              name="segundoApellido"
              value={formData.segundoApellido}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Fecha de Nacimiento"
              variant="outlined"
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Género"
              variant="outlined"
              type="text"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Rut"
              variant="outlined"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
            />
            <TextField
              className="frame"
              color="primary"
              label="Número Telefónico"
              variant="outlined"
              type="tel"
              name="numeroTelefonico"
              value={formData.numeroTelefonico}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="footer">
          <Button color="primary" variant="contained" onClick={closeModal}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
    </div>
  );
};

export default AddPatienteComponent;
