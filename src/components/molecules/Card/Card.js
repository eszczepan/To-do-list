import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Draggable } from 'react-beautiful-dnd';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';
import dragIcon from 'assets/icons/dragIcon.svg';
import toDoIcon from 'assets/icons/list.svg';
import inProgressIcon from 'assets/icons/timer.svg';
import doneIcon from 'assets/icons/tick.svg';
import removeIcon from 'assets/icons/remove.svg';
import { connect } from 'react-redux';
import { removeItem } from 'actions';

const StyledWrapper = styled.div`
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  min-height: 18rem;
  box-shadow: 0 0 10px 1px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  padding: 1.4rem 3rem 1.4rem 1.4rem;
  position: relative;
`;

const IconSidebar = styled.div`
  position: absolute;
  height: 100%;
  width: 3rem;
  top: 0;
  right: 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const StyledRemoveButton = styled(Icon)`
  margin-top: auto;
  cursor: pointer;
`;

const Card = ({ task, column, removeItem }) => {
  return (
    <StyledWrapper>
      <Title>{task.title}</Title>
      <IconSidebar>
        <Icon icon={dragIcon} />
        {column.id === 1 && <Icon icon={toDoIcon} />}
        {column.id === 2 && <Icon icon={inProgressIcon} />}
        {column.id === 3 && <Icon icon={doneIcon} />}
        <StyledRemoveButton
          icon={removeIcon}
          onClick={() => removeItem(task.id, column.id)}
        />
      </IconSidebar>

      <Paragraph>{task.content}</Paragraph>
    </StyledWrapper>
  );
};

Card.propTypes = {
  task: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  column: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    taskIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  task: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (taskId, columnId) => dispatch(removeItem(taskId, columnId)),
});

export default connect(null, mapDispatchToProps)(Card);
