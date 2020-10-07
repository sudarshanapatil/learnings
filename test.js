

let address = {
    details: {
        city: "mumbai",
        pin:90
    }
}

let address2 = { ...address, details: { ...address.details ,city:"thane"} };
console.log(address2)

function* generator(i) {
    yield "sudu";
    // yield i + 10;
    // yield i + 30;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
console.log(gen.next().value);
  // expected output: 20