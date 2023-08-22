import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main";

function HomeRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              ChangeNextWindow={props.ChangeNextWindow}
              ChangePrevWindow={props.ChangePrevWindow}
            />
          }
        />
        <Route path=""></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default HomeRoutes;
