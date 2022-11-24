function add(n1: number, n2: number) {
  return n1 + n2;
}

// function does not allow undefined values
// undefined will be used on only variable

function printResult(num: number): void {
  console.log('Results: ', +num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 8));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(4, 4));

addAndHandle(30, 40, (result) => {
  console.log(result);
});
