//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  const triangle = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    const prevRow = triangle[triangle.length - 1];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        row.push(1);
      } else {
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
};
