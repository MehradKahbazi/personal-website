import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import { GeistSans } from 'geist/font/sans';

const Layout = (props) => {
  return (
    <>
      <Menu />
      <CustomModal />
      <div className={GeistSans.className}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
