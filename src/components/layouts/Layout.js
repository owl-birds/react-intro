import Nav from "./Nav";
function Layout(props) {
  return (
    <div>
      <Nav />
      <section>{props.children}</section>
    </div>
  );
}
export default Layout;
