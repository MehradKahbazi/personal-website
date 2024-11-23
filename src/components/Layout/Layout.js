import Menu from "../Menu/Menu";
import { GeistSans } from 'geist/font/sans';

const Layout = (props) => {
  return (
    <>
      <Menu />
      <div className={GeistSans.className}>{props.children}</div>
    </>
  );
};

export default Layout;
