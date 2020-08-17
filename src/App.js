import React from "react";

import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TopStories from "./pages/TopStories";
import BestStories from "./pages/BestStories";
import NewStories from "./pages/NewStories";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/topstories" component={TopStories}></Route>
            <Route exact path="/beststories" component={BestStories}></Route>
            <Route exact path="/newstories" component={NewStories}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Link exact path="/topstories">
          TOPSTORIES
        </Link> */}
      </Provider>
    </div>
  );
}

export default App;
