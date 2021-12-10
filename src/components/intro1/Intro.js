import Card from "./Card";
function Intro() {
  return (
    <div className="app">
      <h1 className="app-name">My Todos</h1>
      <div className="card-box">
        {/* react custom component */}
        {/* todo there is called props in the ract component */}
        <Card todo="Read" />
        <Card todo="Sleep" />
        <Card todo="Study" />
        <Card todo="Lunch" />
      </div>
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}
export default Intro;
