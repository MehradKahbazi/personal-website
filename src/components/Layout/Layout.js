import Menu from "../Menu/Menu";

const Layout = (props) => {
  return (
    <>
      <Menu />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
