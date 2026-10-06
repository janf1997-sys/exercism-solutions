//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (timestamp) => {
  return new Date(timestamp.getTime() + (10 ** 12))
};
