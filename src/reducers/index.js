import data from 'data';

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      const choosenColumn = state.columns[action.payload.columnId - 1];
      let newColumns = {
        ...state.columns,
        [action.payload.columnId - 1]: {
          ...choosenColumn,
          taskIds: [
            ...choosenColumn.taskIds.filter(
              (item) => item !== action.payload.taskId,
            ),
          ],
        },
      };

      newColumns = Object.values(newColumns);

      const newState = {
        ...state,
        tasks: [
          ...state.tasks.filter((item) => item.id !== action.payload.taskId),
        ],
        columns: newColumns,
      };

      return newState;

    case 'ADD_ITEM':
      const myColumn = state.columns[action.payload.columnId - 1];
      let newCol = {
        ...state.columns,
        [action.payload.columnId - 1]: {
          ...myColumn,
          taskIds: [action.payload.taskId, ...myColumn.taskIds],
        },
      };

      newCol = Object.values(newCol);

      const newTask = {
        id: action.payload.taskId,
        title: action.payload.taskContent.title,
        content: action.payload.taskContent.content,
      };

      return {
        ...state,
        tasks: [newTask, ...state.tasks],
        columns: newCol,
      };

    case 'SHOW_FORM_CARD':
      return {
        ...state,
        form: {
          isVisible: true,
          column: action.payload.columnId,
        },
      };

    case 'HIDE_FORM_CARD':
      console.log(state);
      return {
        ...state,
        form: {
          isVisible: false,
          column: 0,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
