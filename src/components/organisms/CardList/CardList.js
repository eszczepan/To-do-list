import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Droppable } from 'react-beautiful-dnd';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0 0;
  width: 25rem;
`;

const StyledList = styled.div`
  min-height: 10rem;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? 'skyblue' : 'transparent'};
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props;
    if (nextProps.tasks === tasks) {
      return false;
    }
    return true;
  }

  render() {
    const { tasks, column } = this.props;
    return tasks.map((task, index) => (
      <Card key={task.id} task={task} index={index} column={column} />
    ));
  }
}

const CardList = ({ title, tasks, column, isDropDisabled }) => (
  <StyledColumn>
    <CardHeader title={title} amount={tasks.length} column={column} />

    <StyledList>
      {tasks.map((task, index) => {
        // console.log(task);
        return <Card key={task.id} task={task} index={index} column={column} />;
      })}
    </StyledList>
  </StyledColumn>
);

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    taskIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  // isDropDisabled: PropTypes.bool.isRequired,
};

CardList.defaultProps = {
  tasks: [],
};

InnerList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    taskIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};
InnerList.defaultProps = {
  tasks: [],
};

export default CardList;
