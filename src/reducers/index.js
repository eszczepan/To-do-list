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
      // console.log(state);
      // state = newState;
      return newState;

    case 'SHOW_FORM_CARD':
      return {
        ...state,
        form: {
          isVisible: true,
          column: action.payload.columnId,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
