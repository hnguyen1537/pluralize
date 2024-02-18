// Returns the number and pluralized form, like "5 cats" or "1 dog", given
// a noun and count.
function pluralize(noun, count) {
  // TODO: Implement this function.
  const pluralize = (noun,count)
  
  return `${count}${noun}`;
}


console.log(pluralize('cat', 5)); // return result 
console.log(pluralize('dog', 1)); // return result 


// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  pluralize
};
