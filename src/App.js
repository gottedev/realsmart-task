import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardItem } from "./components";
import { arraySwapper, getItems } from "./assets";
import "./App.css";

const AppStyles = styled.div`
  display: flex;
  margin: 4rem;
  justify-content: space-around;
`;

function App() {
  const [unUsed, setUnUsed] = useState(getItems(101));
  const [used, setUsed] = useState([]);

  const handleMove = (e, index, cardId) => {
    if (cardId === "card-1") {
      const [sourceClone, destClone] = arraySwapper(unUsed, used, index);
      setUnUsed(sourceClone);
      setUsed(destClone);
    } else if (cardId === "card-2") {
      const [sourceClone, destClone] = arraySwapper(used, unUsed, index);
      setUnUsed(
        destClone.sort((a, b) =>
          a.id.localeCompare(b.id, "en", { numeric: true })
        )
      );
      setUsed(sourceClone);
    }
  };

  return (
    <AppStyles>
      <div>
        <h2>Un-Used List</h2>
        <Card cardId="card-1">
          {unUsed.map((item, index) => (
            <CardItem
              id={item.id}
              content={item.content}
              key={item.id}
              index={index}
              handleMove={handleMove}
            />
          ))}
        </Card>
      </div>
      <div>
        <h2>Used List</h2>
        <Card cardId="card-2">
          {used.map((item, index) => (
            <CardItem
              id={item.id}
              content={item.content}
              key={item.id}
              index={index}
              handleMove={handleMove}
            />
          ))}
        </Card>
      </div>
    </AppStyles>
  );
}

export default App;
