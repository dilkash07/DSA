console.log("welcome to strings...");

// Q.1 write a function check two string anagram or not
function anagram(str, str1) {
  const obj = {};

  if (str.length !== str1.length) {
    return false;
  }
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of str1) {
    if (!obj[char]) {
      return false;
    }
    obj[char]--;
  }
  return true;
}

// console.log(anagram("listen", "silent"));

// Q.2 write a function check string palindrome or not
function palindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// better version
function palindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (end > start) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// console.log(palindrome("level"));

// Q.3 write a function find maximum occures charactor in a string
function maximumChar(str) {
  const obj = {};
  let max = "";
  let maxCount = 0;

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;

    if (obj[char] > maxCount) {
      max = char;
      maxCount = obj[char];
    }
  }

  return max;
}

console.log(maximumChar("hello"));
