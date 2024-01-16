import classes from "./style.module.scss";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Navbar({ Mode }) {
  const theme = useTheme();

  const handleTheme = () => {
    Mode.myMode === "light" ? Mode.setMyMode("dark") : Mode.setMyMode("light");
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Where in the world?
          </Typography>
          <Box>
            <Button sx={{ ml: 1 }} onClick={handleTheme} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Box className={classes.mode}>
                  <Brightness7Icon />
                  <Typography>Dark Mode</Typography>
                </Box>
              ) : (
                <Box className={classes.mode}>
                  <Brightness4Icon />
                  <Typography>Light Mode</Typography>
                </Box>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
