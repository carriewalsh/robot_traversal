var pry = require('pryjs');
// Robot starts facing at 0º which is east
class Robot {
  constructor(name) {
    this.name = name;
    this.facing = 0;
    this.yCoordinate = 0;
    this.xCoordinate = 0;
  }

  returnsToOrigin(instructions) {
    const instructionsArray = instructions.split("")
    const arrayLength = instructionsArray.length
    for (var i = 0; i < arrayLength; i ++) {
      this.moveRobot(instructionsArray[i])
    }
    // console.log(instructionsArray)
    if (this.yCoordinate === 0 && this.xCoordinate === 0) {
      console.log(true)
      this.reset();
      console.log("BEEP BOOP");
      return true
    }
    else {
      console.log(false)
      console.log({
        facing: this.facing,
        y: this.yCoordinate,
        x: this.xCoordinate
      })
      this.reset();
      console.log("beep boop");
      return false
    }
  }

  // eval(pry.it);

  moveRobot(instruction) {
    if (instruction === "G") {
      if (Math.abs((this.facing + 360)) % 360 === 0) {
        this.xCoordinate += 1;
      }
      else if (Math.abs(this.facing % 270) === 0) {
        this.yCoordinate += -1;
      }
      else if (Math.abs(this.facing % 180) === 0) {
        this.xCoordinate += -1;
      }
      else if (Math.abs(this.facing % 90) === 0) {
        this.yCoordinate += 1;
      }
    }
    else if (instruction === "L") {
      this.facing += 90;
    }
    else if (instruction === "R") {
      this.facing += -90;
    }
    else {
      console.log("Does not compute.")
    }
  }

  reset() {
    this.facing = 0;
    this.yCoordinate = 0;
    this.xCoordinate = 0;
  }
}

var robot = new Robot("TK421")

robot.returnsToOrigin("GRGRGRG")
console.log(robot)
