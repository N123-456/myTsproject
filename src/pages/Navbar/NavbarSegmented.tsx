import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./NavbarSegmented.module.css";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoute";

const data = [
  { link: "/notification", label: "Notifications", icon: IconBellRinging },
  { link: "/billing", label: "Billing", icon: IconReceipt2 },
  { link: "/security", label: "Security", icon: IconFingerprint },
  { link: "/SSHKeys", label: "SSH Keys", icon: IconKey },
  { link: "/database", label: "Databases", icon: IconDatabaseImport },
  { link: "/authentication", label: "Authentication", icon: Icon2fa },
  { link: "/setting", label: "Other Settings", icon: IconSettings },
];

const Navbar = () => {
  
  const navigate = useNavigate();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className="container">
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            {/* <MantineLogo size={28} /> */}
            <Code fw={700}>v3.1.2</Code>
          </Group>
          {links}
        </div>

        <div className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </div>
  );
  
};

export default Navbar;
