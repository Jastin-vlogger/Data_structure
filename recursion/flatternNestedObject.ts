/**
 *  {
        "a.b.c": 1,
        "a.d": 2,
        "e": 3
    }
 *
 * Problem: Write a function to flatten a nested object, where keys are combined with . to represent hierarchy.
 */

const obj = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
    c: 5,
  },
  e: 3,
};

function findHeirarchy(
  obj: Record<string, number | Record<any, any>>,
  resultObj: Record<string, number> = {},
  parentKey = ""
) {
  for (const key in obj) {
    const element = obj[key];
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof element === "number") {
      resultObj[newKey] = element;
    } else {
      findHeirarchy(element, resultObj, newKey);
    }
  }
  return resultObj;
}

console.log(findHeirarchy(obj));
