import { useState } from "react";
import { Button, CssBaseline, ThemeProvider, IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Dark mode icon
import LightModeIcon from "@mui/icons-material/LightMode"; // Light mode icon

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Button onClick={toggleDarkMode}>
          <IconButton onClick={toggleDarkMode} color="primary">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default DarkMode;
