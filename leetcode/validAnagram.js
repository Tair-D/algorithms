/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length == t.length) {
    let sortS = (s + '').split('').sort().join('');
    let sortT = (t + '').split('').sort().join('');
    return sortS == sortT ? true : false;
  } else {
    return false;
  }
};

isAnagram((s = 'anagram'), (t = 'nagaram'));
