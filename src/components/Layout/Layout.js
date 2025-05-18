import { useContext, useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { GeistSans } from 'geist/font/sans';
import AppState from "@/contexts/AppState";

const Layout = (props) => {
  const {collapsed} = useContext(AppState);
  return (
    <>
      {/* <Menu /> */}
      {/* <CustomModal /> */}
      <div className={GeistSans.className}>{props.children}</div>
      {!collapsed && <Footer />}
    </>
  );
};

export default Layout;
