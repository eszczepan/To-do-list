const data = {
  form: {
    isVisible: false,
    column: 0,
  },
  tasks: [
    {
      id: 1,
      title: 'Poprawki karta',
      content: 'Wprowadzenie poprawek na karcie',
    },
    {
      id: 2,
      title: 'Komponenty dla Mobi',
      content: 'dodanie brakujących elementów',
    },
    {
      id: 3,
      title: 'Poprawki dokumenty',
      content: 'Wprowadzenie optymalizacji',
    },
    {
      id: 4,
      title: 'Tablica dokumentów',
      content: 'Zaprojektowanie tablicy dokumentów',
    },
    {
      id: 5,
      title: 'Test A/B',
      content: 'Przeprowadzenie testów A/B',
    },
  ],
  columns: [
    {
      id: 1,
      title: 'Do zrobienia',
      taskIds: [1, 2],
    },
    {
      id: 2,
      title: 'W trakcie',
      taskIds: [3, 4],
    },
    {
      id: 3,
      title: 'Zrobione',
      taskIds: [5],
    },
  ],
  columnOrder: [1, 2, 3],
};

export default data;
