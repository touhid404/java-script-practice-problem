function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return "Invalid";
  }

  return 0.0175 * money;
}
function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  if (
    email.startsWith("@") ||
    email.startsWith(".") ||
    email.startsWith("_") ||
    email.startsWith("+") ||
    email.startsWith("-") ||
    email.includes(" ")
  ) {
    return false;
  }
  if (email.includes("@") && email.endsWith(".com")) {
    return true;
  } else {
    return false;
  }
}

function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let candidate1Votes = 0;
  let candidate2Votes = 0;
  for (const vote of votes) {
    if (typeof vote !== "string") {
      return "Invalid";
    }
    if (vote === "mango") {
      candidate1Votes++;
    } else if (vote === "banana") {
      candidate2Votes++;
    }
  }
  if (candidate1Votes > candidate2Votes) {
    return "Mango";
  } else if (candidate1Votes < candidate2Votes) {
    return "Banana";
  } else {
    return "Draw";
  }
}

function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
  if (f1.roll === f2.bestFriend && f1.bestFriend === f2.roll) {
    return true;
  } else {
    return false;
  }
}


