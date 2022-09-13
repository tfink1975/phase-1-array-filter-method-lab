function findMatching(drivers, driverWeAreLookingFor) {
   const match = drivers.filter(driver => {
    return driver.toUpperCase() === driverWeAreLookingFor.toUpperCase();
   })

console.log(driverWeAreLookingFor.charAt(0).toUpperCase() + driverWeAreLookingFor.slice(1));
   console.log(match);
   return match;
}

function fuzzyMatch(drivers, driverWithMatchingLetters) {

    const returnMatchingLetters = drivers.filter(driver => {
        return driver.substring(0, driverWithMatchingLetters.length) === driverWithMatchingLetters})
           
return returnMatchingLetters;
    
}

function matchName(drivers, nameToMatch) {
      const matching = drivers.filter(([drivers, value]) => typeof value === nameToMatch);
      if(matching) {
         return drivers.name;
      }
};