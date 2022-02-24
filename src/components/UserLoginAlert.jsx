import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function UserLoginAlert({
  open,
  setOpen,
  severity,
  handleClose,
  handleClickAlert,
  message,
  vertical,
  horizontal,
}) {
  //   const handleClickAlert = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }

  //     setOpen(false);
  //   };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
