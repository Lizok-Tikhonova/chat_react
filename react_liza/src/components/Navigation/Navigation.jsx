import React from "react";
import ElementsNav from "./ElementsNav";
import styles from "./Navigation.module.css";

const navigation = [
  {
    href: "/home",
    label: "home",
    icon: "img/grid.svg",
  },
  {
    href: "/chat",
    label: "chat",
    icon: "img/Icon_Chat.svg",
  },
  {
    href: "/contacts",
    label: "contacts",
    icon: "img/person.svg",
  },
  {
    href: "/notifications",
    label: "notifications",
    icon: "img/grid.svg",
  },
  {
    href: "/calendar",
    label: "calendar",
    icon: "img/Calendar.svg",
  },
  {
    href: "/settings",
    label: "settings",
    icon: "img/settings-2.svg",
  },
];




function Navigation() {
  return (
    <nav>
      <ul className={styles.ul}>
        {navigation.map(({ href, label, icon }) => (
          <li key={href}>
            <ElementsNav href={href} icon={icon} label={label} />
        </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
