var groupAnagrams = function (strs) {
  //   console.log(strs);
  let hashMap = new Map();
  let sortedAtr = [];
  strs.forEach((element, index) => {
    // hashMap.set(index, element);
    sortedAtr.push(element.split('').sort().join(''));

    hashMap.set(index, element);
  });

  hashMap.forEach((x) => {});
  //   console.log(sortedAtr);
  //   console.log(hashMap);
  return strs;
};
var res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
// console.log(res);
