//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  years = seconds / 31557600;
  let age = 0;
  switch (true) {
    case planet === 'mercury':
      age = years / 0.2408467;
      return Number(age.toFixed(2))
    case planet === 'earth':
      return Number(years.toFixed(2))
    case planet === 'venus':
      age = years / 0.61519726;
      return Number(age.toFixed(2))
    case planet === 'mars':
      age = years / 1.8808158;
      return Number(age.toFixed(2))
    case planet === 'jupiter':
      age = years / 11.862615;
      return Number(age.toFixed(2))
    case planet === 'saturn':
      age = years / 29.447498;
      return Number(age.toFixed(2))
    case planet === 'uranus':
      age = years / 84.016846;
      return Number(age.toFixed(2))
    case planet === 'neptune':
      age = years / 164.79132;
      return Number(age.toFixed(2))
    default:
      throw new Error('not a planet')
  } 
};
