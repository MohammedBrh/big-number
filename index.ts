// Import stylesheets
import './style.css';

// Write TypeScript code!
let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// console.log(Arrays_sum(a,a));
console.log(aVeryBigSum(a));

function aVeryBigSum(ar: number[]): number {
  // Write your code here
  let summ: any[] = [];
  ar.forEach((el) => {
    const listOfElements = [
      ...el
        .toString()
        .split('')
        .map((el) => +el),
    ];
    if (ar.indexOf(el) == 0) summ = [...listOfElements.map((el) => 0)];
    summ = [...Arrays_sum(summ, listOfElements)];
  });
  return +summ.join('');
}
function Arrays_sum(array1, array2) {
  var result = [];
  var ctr = 0;
  var x = 0;

  if (array1.length === 0) return 'array1 is empty';
  if (array2.length === 0) return 'array2 is empty';

  while (ctr < array1.length && ctr < array2.length) {
    if (array1[ctr] + array2[ctr] > 9) {
      const qution = Math.floor((array1[ctr] + array2[ctr]) / 10);
      const rest = array1[ctr] + array2[ctr] - qution * 10;
      if (result.length == 0) {
        result.push(rest);
        result.unshift(qution);
      } else {
        result.push(rest);
        result[result.length - 2] += +qution;
      }
      // console.log("qution:",qution)
      // console.log("rest:",rest)
    } else {
      result.push(array1[ctr] + array2[ctr]);
    }
    ctr++;
  }

  if (ctr === array1.length) {
    for (x = ctr; x < array2.length; x++) {
      result.push(array2[x]);
      console.log('array2[x]:', array2[x]);
    }
  } else {
    for (x = ctr; x < array1.length; x++) {
      console.log('array1[x]:', array1[x]);
      result.push(array1[x]);
    }
  }
  // console.log("--- result",result)
  return result;
}
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
