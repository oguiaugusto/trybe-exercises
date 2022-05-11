type Callback<T> = (value: T, index?: number, array?: Array<T>) => Boolean;

const myFilter = <T>(parameter: Array<T>, callback: Callback<T>) => {
  const newArray: Array<T> = [];
  for (let i: number = 0; i <= parameter.length - 1; i += 1) {
    if (callback(parameter[i], i, parameter)) {
      newArray.push(parameter[i]);
    }
  }
  return newArray;
};

console.log(myFilter([1, 2, 3, 4, 5], (n) => n % 2 !== 0));
