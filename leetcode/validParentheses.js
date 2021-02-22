var isValid = function (s) {
  let res = [];
  let openBracket = [];
  let closeBracket = [];
  let len = s.length;
  let open = ['(', '[', '{'];
  let close = [')', ']', '}'];

  for (i = 0; i < len; i++) {
    res.push(s[i]);

    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      openBracket.push(s[i]);
    }
  }
  console.log(openBracket);
  for (i = 0; i < len; i++) {
    if (s[i] == ')') {
      if (openBracket[i - 1] == '(') {
        openBracket.pop();
      } else {
        console.log('false');
        // return false;
      }
    } else if (s[i] == ']') {
      if (openBracket[i - 1] == '[') {
        openBracket.pop();
      } else {
        console.log('false');
        // return false;
      }
    } else if (s[i] == '}') {
      if (openBracket[i - 1] == '{') {
        openBracket.pop();
      } else {
        console.log('false');
        // return false;
      }
    } else {
      console.log('true');
      // return true;
    }
  }

  console.log(openBracket);
};

isValid('()[]{}');
