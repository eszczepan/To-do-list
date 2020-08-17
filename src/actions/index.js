export const removeItem = (taskId, columnId) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      taskId,
      columnId,
    },
  };
};
