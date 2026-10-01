/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.'
  }
  else if (timer > 0) {
    return 'Not done, please wait.'
  }
  else {
    return 'Lasagna is done.'
  }
}
export function preparationTime(layers, time = 2) {
  return layers.length * time
}
export function quantities(layers) {
  const lasagna = {noodles: 0, sauce: 0};
  for (let x of layers) {
    if (x == 'noodles') {
      lasagna.noodles += 50
    }
    else if (x == 'sauce') {
      lasagna.sauce += 0.2
    }
    else {
      continue
    }
  }
  return lasagna
}
export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1])
}
export function scaleRecipe(recipe, portion) {
  const scaled = {};
  for (let [key, value] of Object.entries(recipe)) {
    
    scaled[key] = (value / 2) * portion
  }
  return scaled
}