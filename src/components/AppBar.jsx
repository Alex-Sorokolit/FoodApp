import { NavItem } from "./AppBar.styled";
import { AiFillShopping } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import css from "./AppBar.module.css";

const navItems = [
  { href: "shops", text: "Shops", icon: AiFillShopping },
  { href: "cart", text: "Cart", icon: RiShoppingCartFill },
];

export const AppBar = () => {
  return (
    <header className={css.header}>
      {/* <NavItem to="/">
        <img src="/" alt="logo"></img>
      </NavItem> */}
      <nav className={css.navigation}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="20" />
            {text}
          </NavItem>
        ))}
      </nav>
    </header>
  );
};
