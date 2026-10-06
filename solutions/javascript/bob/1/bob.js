//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isSilence = /^\s*$/.test(message);
  const isQuestion = /\?\s*$/.test(message);
  const isYelling = /[a-z]/i.test(message) && !/[a-z]/.test(message);
  switch (true) {
    case isSilence:
      return 'Fine. Be that way!';
    case isQuestion && isYelling:
      return "Calm down, I know what I'm doing!";
    case isQuestion:
      return 'Sure.';
    case isYelling:
      return 'Whoa, chill out!';
    default: 
      return 'Whatever.';
  }
};
