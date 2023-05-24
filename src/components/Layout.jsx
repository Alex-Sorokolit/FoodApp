import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <nav>
          <div className={css.menuWrapper}>
            <NavLink className={css.link} activeClassName="active" to="/">
              <img src={"/"} alt="logo"></img>
            </NavLink>
            <NavLink className={css.link} activeClassName="active" to="/shops">
              Shops
            </NavLink>
            <NavLink className={css.link} activeClassName="active" to="/cart">
              Cart
            </NavLink>
          </div>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
