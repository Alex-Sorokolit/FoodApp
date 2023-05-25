import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  font-size: 20px;

  &.active {
    background-color: orangered;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;
