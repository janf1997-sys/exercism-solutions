// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const LIME_WEDGES = {
    small: 6,
    medium: 8,
    large: 10,
  };
  let limesCut = 0
  let wedgesCut = 0
  while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
    const currentLime = limes[limesCut];
    wedgesCut += LIME_WEDGES[currentLime];
    limesCut++;
    
  }
  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const DRINK_TIMES = {
    "Pure Strawberry Joy": 0.5,
    "Energizer": 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  while (0 < timeLeft && orders.length > 0) {
    let drinkDone = orders.shift();
    let preparationTime = DRINK_TIMES[drinkDone] ?? 2.5;
    timeLeft -= preparationTime
    
    
    
  }
  return orders
}
