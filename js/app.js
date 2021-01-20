// GenBuzz

for (let myNumber = 1; myNumber < 100; myNumber++) {
  if (typeof myNumber !== "number") {
    console.log("This is not a number");
  } else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log("GenBuzz");
  } else if (myNumber % 3 === 0) {
    console.log("Gen");
  } else if (myNumber % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(myNumber);
  }
}
// E-Commerce Item list

let itemsInStore;
switch (itemsInStore) {
  case "shoes-$50":
    console.log("shoes are $50");
    break;
  case "Jeans-$25":
    console.log("Jeans are $25");
    break;
  case "Hat-$12":
    console.log("Hat is $12");
    break;
  case "Socks-$2":
    console.log("Socks is $2");
    break;
  default:
    console.log("Invalid Item");
    break;
}

// Print a random integer (whole number) between 50 and 100 to the console

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(50, 100));
