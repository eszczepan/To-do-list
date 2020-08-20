import data from 'data';

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM': {
      const { columnId, taskId } = action.payload;
      const choosenColumn = state.columns[columnId - 1];
      let newColumns = {
        ...state.columns,
        [columnId - 1]: {
          ...choosenColumn,
          taskIds: [...choosenColumn.taskIds.filter((item) => item !== taskId)],
        },
      };
      newColumns = Object.values(newColumns);
      const newState = {
        ...state,
        tasks: [...state.tasks.filter((item) => item.id !== taskId)],
        columns: newColumns,
      };
      return newState;
    }

    case 'ADD_ITEM': {
      const { columnId, taskId, taskContent } = action.payload;
      const choosenColumn = state.columns[columnId - 1];
      let newColumns = {
        ...state.columns,
        [columnId - 1]: {
          ...choosenColumn,
          taskIds: [taskId, ...choosenColumn.taskIds],
        },
      };
      newColumns = Object.values(newColumns);
      const newTask = {
        id: taskId,
        title: taskContent.title,
        content: taskContent.content,
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
        columns: newColumns,
      };
    }

    case 'SHOW_FORM_CARD': {
      return {
        ...state,
        form: {
          isVisible: true,
          column: action.payload.columnId,
        },
      };
    }

    case 'HIDE_FORM_CARD': {
      return {
        ...state,
        form: {
          isVisible: false,
          column: 0,
        },
      };
    }

    case 'DRAG': {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;

      // Drag and Drop in the same column
      if (droppableIdStart === droppableIdEnd) {
        const column = state.columns.find(
          (item) => Number(droppableIdStart) === item.id,
        );
        const task = column.taskIds.splice(droppableIndexStart, 1);
        const newTasks = column.taskIds.splice(droppableIndexEnd, 0, ...task);
        return {
          ...state,
          [column]: {
            ...column,
            taskIds: [newTasks],
          },
        };
      }

      // Drag and drop between other columns
      if (droppableIdStart !== droppableIdEnd) {
        const oldColumn = state.columns.find(
          (item) => Number(droppableIdStart) === item.id,
        );
        const newColumn = state.columns.find(
          (item) => Number(droppableIdEnd) === item.id,
        );
        const task = oldColumn.taskIds.splice(droppableIndexStart, 1);
        const newTasks = newColumn.taskIds.splice(
          droppableIndexEnd,
          0,
          ...task,
        );
        return {
          ...state,
          [newColumn]: {
            ...newColumn,
            taskIds: [newTasks],
          },
        };
      }

      return;
    }

    default:
      return state;
  }
};

export default rootReducer;
