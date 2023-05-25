import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Grid } from "./Layout.styled";

export const Layout = () => {
  return (
    <Grid style={{ border: "2px solid black" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Grid>
  );
};
