import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoteList from "./components/Note/List";
import NoteAdd from "./components/Note/Add";
import NoteDetail from "./components/Note/Detail";
import NoteEdit from "./components/Note/Edit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={NoteList} />
        <Route path={"/add"} component={NoteAdd} />
        <Route path={"/detail/:id"} component={NoteDetail} />
        <Route path={"/edit/:id"} component={NoteEdit} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
