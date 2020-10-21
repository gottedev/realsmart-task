import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

const CardStyles = styled.div`
  width: 450px;
  padding: 20px;
  background-color: black;
  min-height: 500px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 0.2rem;
  box-shadow: 0 2px 5px red;
`;

function Card({ children, cardId }) {
  const updateChildrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      cardId,
    });
  });
  return (
    <CardStyles>
      <Scrollbars
        style={{ height: "500px" }}
        universal
        className="scrollContainer"
        renderThumbVertical={(props) => (
          <div {...props} style={{ background: "grey", borderRadius: "2px" }} />
        )}
      >
        {updateChildrenWithProps}
      </Scrollbars>
    </CardStyles>
  );
}

export default Card;
