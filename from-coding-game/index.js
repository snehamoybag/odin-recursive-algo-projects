const sumRange = (n) => {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
};

// console.log(sumRange(3));

const power = (n, x) => {
  if (x === 0) return 1;
  if (x === 1) return n;
  return n * power(n, x - 1);
};

// console.log(power(2, 3));

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

const all = (arr, cb) => {
  let areAllPassed = true;

  const operator = (index) => {
    if (index === arr.length) return;
    if (!cb(arr[index])) {
      areAllPassed = false;
      return;
    }

    operator(index + 1);
  };

  operator(0);
  return areAllPassed;
};

// console.log(
//   all([1, 2, 3, 4, 5, 6, 7], (num) => {
//     return num <= 7;
//   })
// );

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1, arr.length));
};
// console.log(productOfArray([1, 2, 3]));

const contains = (obj, searchValue) => {
  const objValues = Object.values(obj);

  for (const value of objValues) {
    if (value === searchValue) return true;

    if (typeof value === "object" && value !== null && !Array.isArray(obj)) {
      return contains(value, searchValue);
    }
  }

  return false;
};

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// console.log(contains(nestedObject, 44));

const totalIntegers = (arr) => {
  let intsFound = 0;

  for (const item of arr) {
    if (typeof item === "number") intsFound += 1;
    if (Array.isArray(item)) {
      intsFound += totalIntegers(item);
    }
  }

  return intsFound;
};

// console.log(totalIntegers([[[5], 3], 2, ["foo"], [], [4, [5, 6]]]));

const sumSquares = (arr) => {
  let sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += sumSquares(item);
    }
    if (typeof item === "number" && !isNaN(item)) {
      sum += item * item;
    }
  }
  return sum;
};

// console.log(sumSquares([10, [[10], 10], [10]]));
// console.log(sumSquares([[[[[[[[[1]]]]]]]]]));

const replicate = (n, num) => {
  if (n <= 0) return [];

  let arr = replicate(n - 1, num);
  arr.push(num);
  return arr;
};

// console.log(replicate(3, 5));
