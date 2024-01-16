import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

function Root() {
  const [myMode, setMyMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar Mode={{ myMode, setMyMode }} />
        <div>
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
