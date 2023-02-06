import React from "react";
import { Gentleman } from "../gentleman/gentleman";
import { Info } from "../info/info";
import { Button } from "../button/button";
import { MOCK_GENTLEMEN } from "../../mocks/mock";

function App() {
  return (
    <>
      <div className="App">
        <Info></Info>
        <Button></Button>
        <main className="main">
          <ul className="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}

export default App;
