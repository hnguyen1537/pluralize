// Returns the number and pluralized form, like "5 cats" or "1 dog", given
// a noun and count.
function pluralize(noun, count) {
  // TODO: Implement this function.

    // if count is equal to or less than 0 , return count and noun+s
    if (count === 0 || count < 0) {
      return `${count} ${noun}s`;
    }
  
    // Use a simple rule for pluralization
    return `${count} ${count === 1 ? noun : noun + 's'}`;
  }
  //checking console
  console.log(pluralize('cat', 5));    // "5 cats"
  console.log(pluralize('dog', 1));    // "1 dog"
  console.log(pluralize('apple', 1));  // "1 apple"


// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  pluralize
};
