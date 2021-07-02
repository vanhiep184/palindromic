const  isPalindrome = (_number) =>  {
  let number = _number;
  if (_number < 0) {
    number = -_number
  }
  const numInput = number.toString();
  const length = numInput.length;
  if (length <= 1) return true;
  const nLength = Math.floor(length / 2);
  for (var i = 0; i < nLength; i++) {
    if (numInput.charAt(i) !== numInput.charAt(length - 1 - i)) {
      return false;
    }
  }
  return true;
};
exports.isPalindrome = isPalindrome;

