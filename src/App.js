import { Route, Routes } from "react-router-dom";
// importing react component
// import Card from "./components/Card";
// import Modal from "./components/Modal";
// import Backdrop from "./components/Backdrop";
import Intro from "./components/intro1/Intro";
import More from "./components/more/More";
import Layout from "./components/layouts/Layout";
import Advanced from "./components/advanced/Advanced";
import UseStateObject from "./components/advanced/components/useState/UseStateObject";
import UseEffectEx from "./components/advanced/components/useEffect/UseEffectEx";
import ConditionalRender from "./components/advanced/components/conditionalRendering/ConditionalRender";
import Form from "./components/advanced/components/forms/Form";
import UseReducer from "./components/advanced/components/useReducer/UseReducer";
import PropDrilling from "./components/advanced/components/prop-drilling/PropDrilling";
import UseContext from "./components/advanced/components/use-context/UseContext";
import CustomHook from "./components/advanced/components/customHooks/CustomHook";
import PropTypes from "./components/advanced/components/prop-types/PropTypes";
import NestedRoute from "./components/nestedRoute/NestedRoute";
import PersonList from "./components/nestedRoute/PersonList";
import PersonDetail from "./components/nestedRoute/PersonDetail";
import ReactMemo from "./components/advanced/components/react-memo/ReactMemo";

// below is the example of a react component
// note
// in react u have to basically make building blocks
// components so the jsx file is more simple and clean

function App() {
  return (
    <Layout>
      {/* <h1>HELLO</h1> */}
      {/* <Intro /> */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/more" element={<More />} />
        <Route path="/advanced" element={<Advanced />} />
        {/* <Route path="usestate" element={<UseStateObject />} />
        </Route> */}
        <Route path="/advanced/usestate" element={<UseStateObject />} />
        <Route path="/advanced/useeffect" element={<UseEffectEx />} />
        <Route path="/advanced/conrender" element={<ConditionalRender />} />
        <Route path="/advanced/forms" element={<Form />} />
        <Route path="/advanced/usereducer" element={<UseReducer />} />
        <Route path="/advanced/propdrilling" element={<PropDrilling />} />
        <Route path="/advanced/usecontext" element={<UseContext />} />
        <Route path="/advanced/customhook" element={<CustomHook />} />
        <Route path="/advanced/proptypes" element={<PropTypes />} />
        <Route path="/advanced/memocallback" element={<ReactMemo />} />
        {/* NESTED ROUTES */}
        <Route path="/nested-route" element={<NestedRoute />}>
          <Route path="/nested-route" element={<h1>EXAMPLE</h1>} />
          <Route path="wow" element={<h1>IS IT WORKING ??? HMMM</h1>} />
          {/* the path above is /nested-route/wow */}
          {/* TRY USE :id */}
          <Route path="people" element={<PersonList />} />
          <Route path="people/:id" element={<PersonDetail />} />
          {/* <Route path=":id" element={<PersonDetail />} /> */}
          {/* </Route> */}
        </Route>
        {/* Alternatives */}
        {/* <Route path="/" element={<Intro />}>
          <Route path="more" element={<More />} />
          <Route path="advanced" element={<Advanced />} />
        </Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
