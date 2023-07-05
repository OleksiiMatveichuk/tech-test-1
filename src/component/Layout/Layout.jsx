import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <div className={css.navBar}>
        <ul className={css.nav}>
          <li>
            <NavLink to={"/"}>People</NavLink>
          </li>
          <li>
            <NavLink to={"/people"}>Strangers</NavLink>
          </li>
          <li>
            <NavLink to={"/friends"}>My Friends</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
