import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals>Hello</Meals>
      </main>
    </Fragment>
  );
}

export default App;
