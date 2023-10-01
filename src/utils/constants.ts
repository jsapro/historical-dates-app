const generateLorem = () => {
  const lorem =
    'bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus';
  const loremArray = lorem.split(' ');
  let finalLorem = '';
  const randomLoremLength = Math.floor(Math.random() * 16) + 10;
  for (let i = 0; i < randomLoremLength; i++) {
    const randomNumber = Math.floor(Math.random() * 25);
    finalLorem = finalLorem + loremArray[randomNumber] + ' ';
  }
  return finalLorem;
};

const generateRandomYear = () => {
  const minYear = 1981;
  const maxYear = 2023;
  const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  return randomYear;
};
generateRandomYear();

const maxMobileScreenSize = 480;

interface HistoricalEvent {
  id: number;
  year: number;
  description: string;
}

interface HistoricalCategory {
  id: number;
  name: string;
  events: HistoricalEvent[];
}

const historicalDates: HistoricalCategory[] = [
  {
    id: 1,
    name: 'Наука',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
  {
    id: 2,
    name: 'Литература',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
  {
    id: 3,
    name: 'Кино',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
  {
    id: 4,
    name: 'Технологии',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
  {
    id: 5,
    name: 'Спорт',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
  {
    id: 6,
    name: 'Искусство',
    events: [
      {
        id: 1,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 2,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 3,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 4,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 5,
        year: generateRandomYear(),
        description: generateLorem(),
      },
      {
        id: 6,
        year: generateRandomYear(),
        description: generateLorem(),
      },
    ],
  },
];

export { historicalDates, maxMobileScreenSize, HistoricalEvent };
