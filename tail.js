const  assertEqual = require('./assertEqual');
const tail = (array)=>{
  array.shift();
  return array;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ['Lighthouse', 'Labs'].toString());