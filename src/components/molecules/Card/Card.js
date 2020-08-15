import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import DragIcon from 'components/atoms/DragIcon/DragIcon';

const StyledWrapper = styled.div`
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  min-height: 18rem;
  box-shadow: 0 0 10px 1px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  padding: 1.4rem 2rem;
  position: relative;
`;

const Card = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <StyledWrapper
        {...provided.draggableProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        <Title>{task.title}</Title>
        <DragIcon {...provided.dragHandleProps} />
        <Paragraph>{task.content}</Paragraph>
      </StyledWrapper>
    )}
  </Draggable>
);

Card.propTypes = {
  task: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number.isRequired,
};

Card.defaultProps = {
  task: null,
};

export default Card;
