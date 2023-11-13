import OutlineButton from "@/button/OutlineButton";
import Logo from "@/logo/Logo";
import Menu from "@/nav/Menu";
import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className="mt-29">
      <div className="container">
        <div className={styles.logo_MenuButton}>
          <Logo></Logo>
          <div className={styles.menu_button}>
            <Menu></Menu>
            <OutlineButton
              border="1.5px solid #2C2F24"
              type="button"
              label="Book A Table"
              background="none"
              padding="12px 24px"
              color="#182226"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
