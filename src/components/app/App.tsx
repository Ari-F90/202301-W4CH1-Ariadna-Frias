import React from "react";
import { Gentleman } from "../gentleman/gentleman";
import { Info } from "../info/info";
import { Button } from "../button/button";
import { MOCK_GENTLEMEN } from "../../mocks/mock";

function App() {
  return (
    <>
      <Info></Info>
      <Button></Button>
      <main className="main">
        <ul className="gentlemen">
          {MOCK_GENTLEMEN.map((item) => (
            <Gentleman
              id={item.id}
              name={item.name}
              status={item.status}
              profession={item.profession}
              twitter={item.twitter}
              picture={item.picture}
              alternativeText={item.alternativeText}
              selected={item.selected}
            ></Gentleman>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
