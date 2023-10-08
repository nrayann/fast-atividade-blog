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
    return (
      <div>
        {errorMessage ? (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Erro ao enviar mensagem
          </Alert>
        ) : (
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
        autoHideDuration={60000000}
        onClose={handleClose}
      >
        {getAlert()}
      </Snackbar>
      {isLoading && <Loading />}
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <TextField
            value={formData.name}
            name="name"
            onChange={(event) => handleChange(event)}
            label="Nome"
            variant="standard"
            sx={inputStyle}
            inputProps={{
              "data-testid": "nameInput",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData.email}
            name="email"
            onChange={(event) => handleChange(event)}
            label="E-mail"
            variant="standard"
            sx={inputStyle}
            inputProps={{
              "data-testid": "emailInput",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formData.message}
            name="message"
            onChange={(event) => handleChange(event)}
            label="Mensagem"
            variant="standard"
            multiline
            minRows={3}
            sx={inputStyle}
            inputProps={{
              "data-testid": "messageInput",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            name="isHuman"
            label="Sou humano"
            onChange={(event) => handleChange(event)}
            control={
              <Checkbox
                checked={formData.isHuman}
                inputProps={{
                  "data-testid": "isHumanInput",
                }}
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!isFormValid() || isLoading}
            onClick={sendData}
            variant="outlined"
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
