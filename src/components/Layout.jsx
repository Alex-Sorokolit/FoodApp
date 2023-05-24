import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavItem } from "./Layout.styled";
import { AiFillShopping } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import css from "./Layout.module.css";

const navItems = [
  { href: "shops", text: "Shops", icon: AiFillShopping },
  { href: "cart", text: "Cart", icon: RiShoppingCartFill },
];

export const Layout = () => {
  return (
    <div>
      <div className={css.header}>
        <nav className={css.navigation}>
          {navItems.map(({ href, text, icon: Icon }) => (
            <NavItem to={href} key={href}>
              <Icon size="20" />
              {text}
            </NavItem>
          ))}
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
