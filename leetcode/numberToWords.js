var numberToWords = function (num) {
  const word = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'nine',
    11: 'nine',
    12: 'nine',
    13: 'nine',
    14: 'nine',
    15: 'nine',
    16: 'nine',
    17: 'nine',
    18: 'nine',
    19: 'nine',
    
  };
  console.log(word[9]);

  let decimal = num / 10;

  return Math.floor(decimal % 10);
};

let res = numberToWords(3);
console.log(res);
