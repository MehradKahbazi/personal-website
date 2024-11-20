import MenuData from "./MenuData";
import ToggleBtn from "./ToggleBtn";
import styles from './Menu.module.css'
import { useState } from "react";

const Menu = () => {
    const [collapsed, setCollapsed] = useState(false)
  return (
    <div className={styles.menu}>
      <ToggleBtn setCollapsed={setCollapsed} collapsed={collapsed} />
      <MenuData collaspsed={collapsed} setCollapsed={setCollapsed}/>
    </div>
  );
};

export default Menu;
