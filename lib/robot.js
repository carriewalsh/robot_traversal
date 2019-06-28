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
    instructionsArray.forEach(moveRobot)
    console.log(instructionsArray)
  }

  moveRobot(instruction) {
    if (instruction === "G") {

    }
    else if (instruction === "L") {

    }
    else {

    }
  };
}

var robot = new Robot("TK421")

robot.returnsToOrigin("GLGLR")
