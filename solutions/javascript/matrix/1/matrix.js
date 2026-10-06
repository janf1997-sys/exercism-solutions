//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this._rows = string.split('\n').map((row) => row.split(' ').map(Number))
    
  }

  get rows() {
    return this._rows
  }

  get columns() {
    const numColumns = this._rows[0].length;
    const result = [];
    for (let colIdx = 0; colIdx < numColumns; colIdx++) {
      const column = [];
      for (const row of this._rows) {
        column.push(row[colIdx]);
      }
      result.push(column);
    }
    return result;
  }
}
