class Ninja {
  constructor(name, health, speed, strength) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
    return this;
  }
  showStats() {
    console.log(
      this.name +
        " has " +
        this.health +
        " health and " +
        this.speed +
        " speed and " +
        this.strength +
        " strength."
    );
    return this;
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Master Splinter has 210 health and 10 speed and 10 strength."
