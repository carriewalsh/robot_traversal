var pry = require('pryjs');
// Robot starts facing at 0º which is east
class Robot {
  constructor(name) {
    this.name = name;
    this.facing = 0;
    this.yCoordinate = 0;
    this.xCoordinate = 0;
  }

  // eval(pry.it);

  returnsToOrigin(instructions) {
    const instructionsArray = instructions.split("")
    // instructionsArray.forEach(this.moveRobot)
    console.log(instructionsArray)
    if (this.facing === 0 && this.yCoordinate === 0 && this.xCoordinate === 0) {
      console.log(true)
      return true
    }
    else {
      console.log(false)
      return false
    }
  }

  moveRobot(instruction) {
    if ((self.facing + 360) % 360 === 0) {
      if (instruction === "G") {
        
      }
      else if (instruction === "L") {

      }
      else {

      }
    }
    else if (self.facing % 270 === 0) {
      if (instruction === "G") {

      }
      else if (instruction === "L") {

      }
      else {

      }
    }
    else if (self.facing % 180 === 0) {
      if (instruction === "G") {

      }
      else if (instruction === "L") {

      }
      else {

      }
    }
    else {
      if (instruction === "G") {

      }
      else if (instruction === "L") {

      }
      else {

      }
    }
  };
}

var robot = new Robot("TK421")

robot.returnsToOrigin("G")
