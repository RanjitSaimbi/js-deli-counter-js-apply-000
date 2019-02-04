function takeANumber(currentLine) {
  var lastPersonNumber = currentLine.[currentLine.length - 1];
  var newPersonNumber = lastPersonNumber + 1;
  currentLine.push(newPersonNumber);
  return `You are number ${newPersonNumber} in line.`;
  
  // return a number that represents  number on a ticket
  
}

function nowServing (katzDeLine){
  if (katzDeLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var beingServed = katzDeLine[0]
    katzDeLine.splice(0,1)
    return `Currently serving ${beingServed}.`
  }
}

function currentLine (katzDeLine){
  if (katzDeLine.length === 0) {
    return "The line is currently empty."
  } else {
  var newLine = []
   for (var i = 0; i < katzDeLine.length; i++) {
      newLine.push(` ${i+1}. ${katzDeLine[i]}`)
    }
    return `The line is currently:${newLine}`
  }
}