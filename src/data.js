const Data = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Poprawki karta',
      content: 'Wprowadzenie poprawek na karcie',
    },
    'task-2': {
      id: 'task-2',
      title: 'Komponenty dla Mobi',
      content: 'dodanie brakujących elementów',
    },
    'task-3': {
      id: 'task-3',
      title: 'Poprawki dokumenty',
      content: 'Wprowadzenie optymalizacji',
    },
    'task-4': {
      id: 'task-4',
      title: 'Tablica dokumentów',
      content: 'Zaprojektowanie tablicy dokumentów',
    },
    'task-5': {
      id: 'task-5',
      title: 'Test A/B',
      content: 'Przeprowadzenie testów A/B',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Do zrobienia',
      taskIDs: ['task-1', 'task-2'],
    },
    'column-2': {
      id: '2',
      title: 'W trakcie',
      taskIDs: ['task-3'],
    },
    'column-3': {
      id: '1',
      title: 'Zrobione',
      taskIDs: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default Data;
