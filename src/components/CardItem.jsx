import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { RiAddCircleLine } from "react-icons/ri";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CardItemStyles = styled.div`
  background-color: red;
  border-radius: 0.1rem;
  padding: 0.5rem;
  margin: 0rem 1rem 1rem 1rem;
`;

const CardItemContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardItemContent = styled.div``;

const CardItemIcon = styled.div``;
function CardItem({ content, id, handleMove, index, cardId }) {
  const CardIcon =
    cardId === "card-1" ? <RiAddCircleLine /> : <IoMdRemoveCircleOutline />;

  return (
    <CardItemStyles onClick={(e) => handleMove(e, index, cardId)}>
      <CardItemContentWrapper>
        <CardItemContent>{content}</CardItemContent>
        <CardItemIcon>{CardIcon}</CardItemIcon>
      </CardItemContentWrapper>
    </CardItemStyles>
  );
}

CardItem.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  cardId: PropTypes.string,
  handleMove: PropTypes.func.isRequired,
};

CardItem.defaultProps ={
  cardId:''
}

export default CardItem;
