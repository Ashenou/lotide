const  assertEqual = require('./assertEqual');


// Return all the elements of the array except the first(head)
const tail = (array)=>{
  array.shift();
  return array;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ['Lighthouse', 'Labs'].toString());