import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoteList from "./components/Note/List";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={NoteList} />
        {/* <Route path={"/note/add"} component={Add} />
        <Route path={"/note/:id"} component={Note} />
        <Route path={"/note/edit/:id"} component={Edit} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
