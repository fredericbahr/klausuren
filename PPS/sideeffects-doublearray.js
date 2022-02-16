// insert {1,2} as [1,2] in brackets ([])
const finalArray = [
  [1, 0],
  [4, 0],
];

const sideEffects = (a) => {
  //adjust sideEffects
  a[0][a[0][0]] = (a[0][1] - a[0][0]) * a[0][0];
  a[1][a[1][1]] = 1 - a[1][1];

  return a;
};

const checkArrayEqual = (arr1, arr2) => {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};

for (let idx0 = -10; idx0 <= 10; idx0++) {
  for (let idx1 = -10; idx1 <= 10; idx1++) {
    for (let idx2 = -10; idx2 <= 10; idx2++) {
      for (let idx3 = -10; idx3 <= 10; idx3++) {
        let arr = [
          [idx0, idx1],
          [idx2, idx3],
        ];

        arr = sideEffects(arr);

        if (checkArrayEqual(finalArray, arr)) {
          console.log([
            [idx0, idx1],
            [idx2, idx3],
          ]);
        }
      }
    }
  }
}
