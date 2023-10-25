import { useState } from "react";

import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";

import Loading from "../../components/Loading";

const inputStyle = {
  width: "50%",
};

const defaultFormData = {
  name: "",
  email: "",
  message: "",
  isHuman: false,
};

/**
 * Renderizar condicionalmente o componente Loading baseado no estado isLoading
 *
 * Adicionar name e evento onChange nos componentes TextField para funcionar com o método handleChange
 *
 * Desabilitar componente Button condicionalmente com a props disabled quando isLoading for true ou o formulário não estiver válido
 *
 * Corrigir o método getAlert com renderização condicional baseada no valor de errorMessage
 *
 * Executar o método sendData quando clicar no botão Enviar
 */

export default function Contact() {
  const [formData, setFormData] = useState(defaultFormData);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showSuccessMessage = () => {
    setErrorMessage(false);
    setOpenSnackBar(true);
  };

  const showErrorMessage = () => {
    setErrorMessage(true);
    setOpenSnackBar(true);
  };

  const sendData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://fast-react-api.onrender.com/contact",
        {
          method: "post",
          headers: [
            ["Accept", "application/json"],
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify(formData),
        }
      );

      setIsLoading(false);

      if (response.ok) {
        showSuccessMessage();
        setFormData(defaultFormData);
      } else {
        showErrorMessage();
      }
    } catch (error) {
      setIsLoading(false);
      showErrorMessage();
    }
  };

  const isFormValid = () =>
    formData.name && formData.email && formData.message && formData.isHuman;

  const getAlert = () => {
    /** Renderizar o componente Alert correto de acordo com o valor de errorMessage */
    return (
      <div>
        {/**
         * Se errorMessage for true, retornar:
         */}
        {errorMessage && (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Erro ao enviar mensagem
          </Alert>
        )}
        {/**
         *  Se errorMessage for false, retornar:
         */}
        {!errorMessage && (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Mensagem enviada com sucesso
          </Alert>
        )}
      </div>
    );
  };

  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        {getAlert()}
      </Snackbar>
      {/* mostrar apenas se isLoading for true */}
      {isLoading && <Loading />}
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            onChange={(event) => handleChange(event)}
            value={formData.name}
            label="Nome"
            variant="standard"
            sx={inputStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            onChange={(event) => handleChange(event)}
            value={formData.email}
            label="E-mail"
            variant="standard"
            sx={inputStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            onChange={(event) => handleChange(event)}
            value={formData.message}
            label="Mensagem"
            variant="standard"
            multiline
            minRows={3}
            sx={inputStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            name="isHuman"
            onChange={(event) => handleChange(event)}
            label="Sou humano"
            control={<Checkbox checked={formData.isHuman} />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={sendData}
            disabled={isLoading || !isFormValid()}
            variant="outlined"
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
