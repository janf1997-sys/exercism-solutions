//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const DISCOUNTS = {
    0: 0,
    1: 800,
    2: 1520,
    3: 2160,
    4: 2560,
    5: 3000
  };

export const cost = (books) => {
  const counts = [0, 0, 0, 0, 0];
  for (const book of books) {
    counts[book -1]++;
  }
  const groups = [];
  while (Math.max(...counts) > 0) {
    const size = counts.filter(c => c > 0).length;
    groups.push(size);
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) counts[i]--;
    }
  }
  while (groups.includes(5) && groups.includes(3)) {
    groups[groups.indexOf(5)] = 4;
    groups[groups.indexOf(3)] = 4;
  }
  return groups.reduce((total, size) => total + DISCOUNTS[size], 0);
  
};
