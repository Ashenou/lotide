const assertEqual = require("../assertEqual");
const countLetters = require('../countLetters');


const result1 = countLetters("Lighthouse in the house");
assertEqual((result1["L"]),1);

const result2 = countLetters("Lighthouse in the house");
assertEqual(result2["h"], 4);