const isPalindrome = require("./palindromic").isPalindrome;

test("check is a palindrome number", () => {
  expect(isPalindrome(1)).toBe(true);
});

test("check is a palindrome number", () => {
  expect(isPalindrome(1111)).toBe(true);
});

test("check is a not palindrome number", () => {
  expect(isPalindrome(23023)).toBe(false);
});

test("check is a palindrome number", () => {
  expect(isPalindrome(12321)).toBe(true);
});

test("check is a not palindrome number", () => {
  expect(isPalindrome(23023)).toBe(false);
});

test("check is not a palindrome number", () => {
  expect(isPalindrome(123)).toBe(false);
});

test("check negative numbers", () => {
  expect(isPalindrome(-123)).toBe(false);
});

test("check negative number is a palindrome number", () => {
  expect(isPalindrome(-12321)).toBe(true);
});

test("check negative number is a palindrome number", () => {
  expect(isPalindrome(-222111222)).toBe(true);
});