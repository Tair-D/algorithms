var groupAnagrams = function (strs) {
  let hash = {};

  strs.forEach((element) => {
    let letters = element.split('').sort();
    hash[letters] ? hash[letters].push(element) : (hash[letters] = [element]);
  });

  const keys = Object.keys(hash)
  const values = keys.map(function(v){return hash[v]})
  console.log(values)
  return values;
};
var res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
// console.log(res);
