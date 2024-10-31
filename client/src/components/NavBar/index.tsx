import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import CartIcon from "../../assets/icons/cartIcon";
import styles from "./index.module.css";
import Logo1 from "../../assets/logo.png";
import { ToggleTheme } from "../ThemeToggle/ThemeToggle";
import { useAuth } from "../../providers/AuthProvider";
import { User } from "../../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Avatar } from "@mui/material";


const NullUser: React.FC = () => {
    return (
        <div className="flex gap-4 justify-center items-center">
          <Link to="login">
              <Button type="primary">Login</Button>
          </Link>
          <Link to="signup">
              <Button type="secondary">Signup</Button>
          </Link>
          <ToggleTheme />
          <div className="text-[#333] cursor-pointer font-semibold relative">
              <div className="cartCount absolute top-[-8px] right-[-8px] w-6 h-5 text-center flex justify-center items-center rounded-xl bg-red-500 text-white text-sm">
                0
              </div>
              <CartIcon />
          </div>
        </div>
    );
};

interface LoggedInUserProps {
    user: User | null;
}


const LoggedInUser: React.FC<LoggedInUserProps> = ({ user }) => {
    console.log(user?.firstname);
    return (
      <div className="flex gap-4 items-center">
        <Link to="/logistics">
          <Button type="primary">
            <FontAwesomeIcon icon={faTruckFast} /> Logistics
          </Button>
        </Link>
        <Button className='flex items-center justify-center gap-x-3' type="secondary">
          <span>Profile</span>
          <div className="flex items-center">
            <img alt="profileImage" src='https://bit.ly/dan-abramov' className={styles['avatar']} />
            <ArrowDropDownIcon style={{ fontSize: 25, color: '#333' }} />
          </div>
        </Button>
        <div className="relative cursor-pointer">
          <div className="absolute top[-3px] right-[-8px] w-6 h-5 text-center flex justify-center items-center rounded-xl bg-red-500 text-white text-sm">
            0
          </div>
          <NotificationsIcon style={{ fontSize: 32, color: "#333333de" }} />
        </div>
        
        <div className="themeContainer">
          <ToggleTheme />
        </div>

        <div className="text-[#333] cursor-pointer font-semibold relative">
          <div className="cartCount absolute top-[-7px] right-[-8px] w-6 h-5 text-center flex justify-center items-center rounded-xl bg-red-500 text-white text-sm">
            0
          </div>
          <CartIcon />
        </div>
      </div>
    );
};

export const NavBar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className="container w-[80%] m-auto flex items-center justify-between">
        <Link to="/">
          <img className={styles["logo"]} src={Logo1} alt="Logo" />
        </Link>
        <div>
          {isAuthenticated ? (
            <LoggedInUser user={user} />
          ) : (
            <NullUser />
          )}
        </div>
      </div>
    </nav>
  );
};
