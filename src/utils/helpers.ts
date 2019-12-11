
export function removeDuplicates<T>(originalArray: Array<T>, prop: string): Array<T> {
  const newArray: Array<T> = [];
  const lookupObject = {};

  for (const i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (const i in lookupObject) {
    newArray.push(lookupObject[i]);
  }

  return newArray;
}

