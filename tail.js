// Return all the elements of the array except the first(head)

const tail = (array)=>{
  array.shift();
  return array;
};

module.exports = tail;