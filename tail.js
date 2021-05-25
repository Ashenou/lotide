const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion failed ${actual} != ${expected}`);
  }
};

const tail = (array)=>{
  array.shift();
  return array;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ['Lighthouse', 'Labs'].toString()); // => will always fail!