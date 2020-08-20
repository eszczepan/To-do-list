export const removeItem = (taskId, columnId) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      taskId,
      columnId,
    },
  };
};

export const addItem = (columnId, taskContent) => {
  const taskId = Math.floor(Math.random() * (1000 - 8));
  return {
    type: 'ADD_ITEM',
    payload: {
      taskId,
      columnId,
      taskContent,
    },
  };
};

export const showCardForm = (columnId) => {
  return {
    type: 'SHOW_FORM_CARD',
    payload: {
      columnId,
    },
  };
};

export const hideCardForm = () => {
  return {
    type: 'HIDE_FORM_CARD',
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => {
  return {
    type: 'DRAG',
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
