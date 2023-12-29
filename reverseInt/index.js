// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1
/*My attempt which draws upon inspo from the reverse int 


function reverseInt(n) {
  return n.toString().split("").reverse().join("");
  let num = "";
  for (let i = 0; i <= n.length; i--) {
    const char = n[i];
    num = char + num;
  }
  return num;
}
*/
/*
ChatGpt Help after mine:
*/
/*
function reverseInt(n) {
  const revString = n.toString().split("").reverse().join("");
  const revNumber = parseInt(revString);

  return n < 0 ? -revNumber : revNumber;
}
*/
/* Below is coding Kevin's answer  */
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }
  return reversed;
}

/* Below is a correct attempt made by a user to not use methods to solve the reverse int
function reverseInt(n) {
  let number = n;
  let reversed = 0;

  if (number < 0) {
    number = -number;
    while (number > 0) {
      let lastDigit = number % 10;
      reversed = reversed * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    return -reversed;
  } else {
    while (number > 0) {
      let lastDigit = number % 10;
      reversed = reversed * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    return reversed;
  }
}
*/
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

describe("Integer Reversal", () => {
  it("reverseInt() works on positive numbers", () => {
    assert.equal(reverseInt(3), 3);
    assert.equal(reverseInt(13), 31);
    assert.equal(reverseInt(100), 1);
    assert.equal(reverseInt(1408), 8041);
  });

  it("reverseInt() works on negative numbers numbers", () => {
    assert.equal(reverseInt(-3), -3);
    assert.equal(reverseInt(-13), -31);
    assert.equal(reverseInt(-100), -1);
    assert.equal(reverseInt(-1408), -8041);
  });
});

mocha.run();
