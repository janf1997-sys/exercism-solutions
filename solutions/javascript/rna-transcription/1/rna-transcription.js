//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = ''
  for (let x of dna) {
    if (x === 'G') {
      rna += 'C'
    }
    else if (x === 'C') {
      rna += 'G'
    }
    else if (x === 'T') {
      rna += 'A'
    }
    else if (x === 'A') {
      rna += 'U'
    }
  }
  return rna
};
