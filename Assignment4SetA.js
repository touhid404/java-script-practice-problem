function calculateVAT(price) {
    if (price < 0 || typeof price !== "number") {
      return "Invalid";
    }
    return price * 0.075;
  }
  
  function validContact(contact) {
    if (typeof contact !== "string") {
      return "Invalid";
    }
    if (contact.length !== 11) {
      return false;
    }
    if (!contact.startsWith("01")) {
      return false;
    }
    if (contact.includes(" ")) {
      return false;
    }
  
    return true;
  }
  
  function willSuccess(marks) {
    if (typeof marks !== "object") {
      return "Invalid";
    }
    let countUp = 0;
    let countDown = 0;
    for (const mark of marks) {
      if (mark < 50) {
        countDown++;
      } else {
        countUp++;
      }
    }
    if (countUp > countDown) {
      return true;
    } else {
      return false;
    }
  }
  
  function validProposal(person1, person2) {
    if (typeof person1 !== "object" || typeof person2 !== "object") {
      return "Invalid";
    }
    if (person1.gender === person2.gender) {
      return false;
    }
    let ageGap = person1.age - person2.age;
    if (Math.abs(ageGap) <= 7) {
      return true;
    }
    return false;
  }
  
  function calculateSleepTime(times) {
    let totalSleepTime = 0;
    for (const time of times) {
      if (typeof time !== "number") {
        return "Invalid";
      }
      totalSleepTime += time;
    }
    let hour = Math.floor(totalSleepTime / 3600);
    let min = Math.floor((totalSleepTime % 3600) / 60);
    let sec = totalSleepTime % 60;
  
    return {
      hour: hour,
      minute: min,
      second: sec,
    };
  }
  
  