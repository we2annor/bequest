const numbers = [30, 20, 10, 40, 60, 80, 1];

export const findTheHighestProductPair = (num) => {
  let highestProduct = 0;
  let thePair = {};
  let currNum = num[0];

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i !== j) {
        if (currNum * num[j] > highestProduct) {
          highestProduct = currNum * num[j];
          thePair.fNum = currNum;
          thePair.secNum = num[j];
        }
      }
      currNum = num[i];
    }
  }
  return thePair;
};

findTheHighestProductPair(numbers);

/*Tests
  Array methods:
  filter
  map
  find
  forEach
  some
  every
  reduce
  */

const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

interface Item {
  name: string;
  price: number;
}

const averageNum = (arr: Item[]) => {
  const prices = arr
    .map((price) => price.price)
    .sort((a, b) => a - b)
    .reduce((total, current, index) => {
      total = total + current;
      if (index === arr.length - 1) {
        return (total = total / 2);
      } else {
        return total;
      }
    });
  return prices;
};

console.log(averageNum(items));

const filteredItem = items.filter((item) => item.price <= 100);
const mapedItems = items.map((item) => item.name);
const findItem = items.find((item) => item.name === "Phone");

//items.forEach((item) => console.log(item.name + " " + item.price));

const totalItemPrices = items.reduce((total, item) => {
  return item.price + total;
}, 0);

const reverseArr = (str: string) => {
  const newArr = str.split("");
  newArr.reverse();
  str = newArr.join("");
  return str;
};

type ArrObj = { [key: string]: string | number | any };

// const arrayAndObjects = (arr: object[]) => {
//   for (let obj of arr) {
//     for (let item in obj) {
//       console.log(arr[item]);
//     }
//   }
// };

//console.log(arrayAndObjects(items));

type MaxChar = { [index: string]: string | number | any };

const maxChar = (str: string[]) => {
  let obj: MaxChar = {};
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  let maxNum = 0;
  let maxCharItem = "";
  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maxCharItem = char;
    }
  }
  console.log(`${maxCharItem} appeared ${maxNum} times`);
};

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

maxChar(fruitBasket);

type TMaxChar = { [key: string]: string | number | any };

const maxChar3 = (arr: TMaxChar) => {
  const counts = arr.reduce((total: any, current: any) => {
    total[current] = (total[current] || 0) + 1;
    return total;
  }, {});
  return counts;
};
//total[current] = total[current] || 0;

console.log(maxChar3(fruitBasket));

//maxChar("HellooThere");

//find the pair of numbers that produce the largest number;

const numbers = [30, 20, 10, 40, 60, 80, 1, 0, 100, 101];
console.log(findTheHighestProductPair(numbers));

// const findTheHighestProductPair = (num: number[]) => {
//   let highestProduct = 0;
//   let thePair = { first: "", sec: "" };
//   for (let num1 in num) {
//     for (let num2 in num) {
//       if (num1 * num2 > highestProduct) {
//         highestProduct = num1 * num2;
//         thePair.first = num1;
//         thePair.sec = num2;
//       }
//     }
//   }
//   return thePair;
// };

const reversedArr2 = (str: string) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

//reverse integer
const reverseInt = (num: number) => {
  let newNum = num.toString().split("").reverse();
  let numAdd = newNum.join("");
  console.log(numAdd);
};

//reverseInt(501);

// console.log(reversedArr2("Greetings!"));
// console.log("reversed string", reverseArr("Rolling"));

// console.log("filtered item", filteredItem);
// console.log("mapedItems", mapedItems.sort());
// console.log("find item", findItem);
// console.log("total", totalItemPrices);

function fizzBuzz(n: number) {
  // Write your code here
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
  }
}

const average = (a: number, b: number) => {
  return (a + b) / 2;
};

//console.log(average(2, 1));

const newArray = [2, 3, 5, 1, 3, 7, 10, 23];
//console.log(newArray.sort((a, b) => a - b));

//console.log(fizzBuzz(15));
