const fibs = (n) => {
  if (n <= 1) return [0];

  const fibsArr = [0, 1]; // default fibs

  for (let i = fibsArr.length; i < n; i += 1) {
    const lastItem = fibsArr[fibsArr.length - 1];
    const secondlastItem = fibsArr[fibsArr.length - 2];
    const fibNum = secondlastItem + lastItem;
    fibsArr.push(fibNum);
  }

  return fibsArr;
};

// console.log(fibs(8));

const fibsRec = (n) => {
  if (n <= 1) return [0];

  if (n === 2) return [0, 1];

  const fibsArr = fibsRec(n - 1);
  const lastItem = fibsArr[fibsArr.length - 1];
  const secondlastItem = fibsArr[fibsArr.length - 2];
  const fibNum = secondlastItem + lastItem;

  fibsArr.push(fibNum);
  return fibsArr;
};

console.log(fibs(8));
