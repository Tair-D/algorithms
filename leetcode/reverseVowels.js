function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

var reverseVowels = function (s) {
  s = s.split(/\s/).join('');
  let arr = [...s];
  let l = 0,
    r = arr.length - 1;
  let re = /^[aeiou]$/i;
  let rVowels = [];
  //   console.log(re);
  while (l < r) {
    if (isVowel(arr[l])) {
      console.log('l = ' + arr[l]);
      // if (isVowel(arr[r])) {
      //   rVowels.push(arr[r]);
      //   console.log('r = ' + r);
      //   r--;
      // }

      l++;
    } else {
      l++;
    }
    console.log(rVowels);
  }
  //   console.log(r);

  //   return s;
};

let res = reverseVowels('leetcode');

// console.log(res);
