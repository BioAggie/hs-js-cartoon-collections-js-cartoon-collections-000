function dwarfRollCall(dwarves) {
  var nameOfDwarves = [];
// create an array to include the dwarves
  
  for (var i = 0; i < dwarves.length; i++) {
    nameOfDwarves.push(`${i+1}. ${dwarves[i]} `);
  }
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

  return nameOfDwarves.join('');
// The join() method joins all elements of an array into a string and returns this string.
}

function summonCaptainPlanet(planeteerCalls){
  var elements = [];
// create an array of the elements to call Captain Planet

  for (let i = 0; i < planeteerCalls.length; i++) {
  elements.push(planeteerCalls[i].toUpperCase() + '!');
  }
// .toUpperCase changes the words in the string to all upper case letters.

  return elements;
}

function longPlaneteerCalls(words) {
// create a test to tell if the word length is over 4 letters. 
  
  for (let i=0; i < words.length; i++) {
    if (words[i].length > 4) {
      // If the word length is more than 4, return true.
      return true;
    } else {
      return false;
      // If the word length is 4 or less, return false.
    }
  }
}

function findTheCheese (foods) {
// Find out of there is cheese in the string or not.
 
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || 
    foods[i] === 'feta' ||
    
    // <--- || returns true if either element is true.
        foods[i] === 'gouda') {
          return foods[i];
        }
  }
  return 'no cheese!';
// If the chesse listed above is not present, "no cheese" will be returned


}


function hello () {
  return "hello"
  return "goodbye"
}

function wordsWithB (words) {
  var names = []
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === 'B') {
    names.push(words[i])
    }
  }
return names
}

