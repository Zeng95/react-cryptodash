export function isEmpty(obj) {
  // Object.keys will return an Array, which contains the property names of the object.
  // If the length of the array is 0, then we know that the object is empty.
  return Object.keys(obj).length === 0
}

export function formatNumber(number) {
  // First, convert the number to a string and slice the string
  // Second, convert the string back to a number
  return Number(number.toString().slice(0, 7))
}
