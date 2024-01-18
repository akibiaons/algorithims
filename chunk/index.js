// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

/*
function chunk(array, size) {
  const chunked = []; // Empty array is declared here to hold the array chunks

  // Below we are looking at each element in the bgiven array
  for (let element of array) {
    // Below we are reteiving the last element in the array with a variable called "last" that is assigned to the last element of the given array
    const last = chunked[chunked.length - 1];
    /* 
      Now here's some high level logic that I missed, 
      if the last element does not exist or if the length is equal to
      the chunk size "codey" needs to push a new chunk into chunk
      with the current element.
    add comment here!
    if (!last || last.length === size) {
      chunked.push([element]);

      /*
      else just add another element to the chunk
    add comment here!!!
    } else {
      last.push(element);
    }
  }
  // This returns the chunked empty array after numbers get pushed and a new chunk is made
  return chunked;
}
//=========================================================================================================================
*/
// The function below does not work.
/*
function chunk(array, size) {
  // An empty array is declared to be pushed into later...
  const chunked = []; //empty array to be pushed into?
  for (let element of array) {
    const slice = chunked.slice(size);
    if (!slice || ) {
      chunked.push([element]);
    } else {
      slice.push(element);
    }
    return chunked;
  }
}
*/
//=========================================================================================================================
function chunk(array, size) {
  // Again another empty array to have chunks pushed into later
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// Kevin (SENSEI) made it with the method below:
function chunkKevin(array, size) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      last.push(item);
    }
  }
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(___```__  )|  __)   (_____  )
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

describe("Array Chunking", () => {
  it("chunk() works", () => {
    let arr = ["a", "b", "c", "d"];
    let chunked = chunk(arr, 2);
    assert.deepEqual(chunked, [
      ["a", "b"],
      ["c", "d"],
    ]);

    arr = [0, 1, 2, 3, 4, 5];
    chunked = chunk(arr, 4);
    assert.deepEqual(chunked, [
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
});

mocha.run();
