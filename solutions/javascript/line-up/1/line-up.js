//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  let suffix = 'th';
  switch (true) {
    case lastTwoDigits === 11:
    case lastTwoDigits === 12:
    case lastTwoDigits === 13:
      suffix = 'th'
      break;
    case lastDigit === 1:
      suffix = 'st'
      break;
    case lastDigit === 2:
      suffix = 'nd'
      break;
    case lastDigit === 3:
      suffix = 'rd'
      break;
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
};
