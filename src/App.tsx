import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "./queries";

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data);
  return (
    <>
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
