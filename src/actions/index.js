export const removeItem = (taskId, columnId) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      taskId,
      columnId,
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
