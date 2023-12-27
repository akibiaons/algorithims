// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false
/*
function palindrome(str) {
  str = str.toLowerCase(); // this .toLowerCase() method was a good idea to use, but I forgot how and when to use it...
  /*
  So I was 90% correct in solving this problem, I just didn't know where to specifically
  put the .toLowerCase() as I though i could connect it to the methods below: However,
  my mentor mentioned that assigning str (var) = str.toLowerCase() would be better as
  it is now defined within the scope of the function.
  //
  //
  const revStr = str.split("").reverse().join("");
  if (str === revStr) {
    return true;
  } else {
    return false;
  }
}
*/
// Below is an easier syntatic way to write it, I can also compare the time & space complexity of
function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

// We have a time complexity of O(N) as we go over every character in the string n amount of times to reverse it!
// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();
