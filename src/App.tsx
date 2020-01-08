import * as React from "react";
import GlobalStyle from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    </>
  );
};

export default App;
