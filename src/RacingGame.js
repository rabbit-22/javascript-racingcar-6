import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";

class RacingGame {
  constructor(carNames, raceRounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.rounds = raceRounds;
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  checkCarCanMove(randomNumber) {
    return randomNumber >= 4;
  }

  start() {
    for (let i = 0; i < this.rounds; i++) {
      this.cars.forEach((car) => {
        const randomNumber = this.generateRandomNumber();
        if (this.checkCarCanMove(randomNumber)) {
          car.move();
        }
      });
    }
  }
}

export default RacingGame;
