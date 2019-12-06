const routerTransition = {
  '/home': 0,
  '/transition': 1,
  '/countdown/:name': 0,
};

const transitionList = [
  {
    enter: 'from-right',
    exit: 'to-right',
  },
  {
    enter: 'from-bottom',
    exit: 'to-bottom',
  },
];

export {
  routerTransition,
  transitionList,
};
