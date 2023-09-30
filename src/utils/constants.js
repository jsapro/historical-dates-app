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

const historicalDates = [
  {
    id: 1,
    name: 'Наука',
    events: [
      {
        id: 1,
        year: 2001,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2021,
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
        year: 2002,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2022,
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
        year: 2003,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2023,
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
        year: 2004,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2024,
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
        year: 2005,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2025,
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
        year: 2006,
        description: generateLorem(),
      },
      {
        id: 2,
        year: 2016,
        description: generateLorem(),
      },
      {
        id: 3,
        year: 2017,
        description: generateLorem(),
      },
      {
        id: 4,
        year: 2018,
        description: generateLorem(),
      },
      {
        id: 5,
        year: 2019,
        description: generateLorem(),
      },
      {
        id: 6,
        year: 2026,
        description: generateLorem(),
      },
    ],
  },
];

export { historicalDates };
