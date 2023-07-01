function map(array, callback) {
  const mappedArr = [];
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(callback(array[i]));
  }
  return mappedArr;
}
const array = [1, 2, 3, 4, 5];
const resultantArray = map(array, (num) => num * num);
console.log(resultantArray);
