// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'
//=============================================================================
// Reverse array
/*
function reverse(str) {
  return str.split("").reverse().join(""); // To the left is a shorter mehtod
  // Below is a longer method of executing it
    const arr = str.split("");
    arr.reverse();
    const res = arr.join("");
    return res;
}
*/
//=============================================================================
// Below is second try
// If you couldn't use .reverse() you'll have to use an alternate solution...
/*
function reverse(str) {
  let res = str;
  // for (let i = 0; i <= res.length; i--) {
  //   return res;
  // }
}
console.log(reverse("words"));
console.log("test");
*/
//=============================================================================
/*
function reverse(str) {
  // return str.split("").reverse().join(""); to the left is the method we prev used
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
}
*/
//=============================================================================
// Below is the reduce method
function reverse(str) {
  return str.split("").reduce((output, char) => {
    output = char + output;
    return output;
  }, "");
}
//=============================================================================
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

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
