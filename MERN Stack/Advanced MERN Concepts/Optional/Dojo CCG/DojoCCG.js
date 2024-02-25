class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    }

    class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} attack ${target.name}`)
    }
    }

    class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
        // implement card text : "Raise / Lower the target's resilience / power by amount"
        // target.power += this.magnitude;
        if (this.stat==="resilience"){target.res += this.magnitude}
        else if (this.stat==="power"){target.power += this.magnitude}
        if(this.magnitude<0){
            console.log(`Lower ${target.name}'s ${this.stat} by ${-this.magnitude}`)
        } else if(this.magnitude>0){
        console.log(`Increase ${target.name}'s ${this.stat} by ${this.magnitude}`)
        }
        } else {
        throw new Error("Target must be a unit!");
        }
    }
}

const Red = new Unit ("Red Belt",3,3,4)
console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
const cardEffect1 = new Effect ("Hard Algorithm", 2,"resilience", 3)
cardEffect1.play(Red)
console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
const Black = new Unit ("Black Belt", 4,5,4)
const cardEffect2 = new Effect ("Unhandled Promise Rejection", 1,"resilience", -2)
cardEffect2.play(Red)
console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
const cardEffect3 = new Effect ("Pair Programming", 3,"power", 2)
cardEffect3.play(Red)
console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
console.log(`${Black.name} have ${Black.power} power and ${Black.res} resilience`)
Red.attack(Black)
console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
console.log(`${Black.name} have ${Black.power} power and ${Black.res} resilience`)
// console.log(`${Black.name} have ${Black.power} power and ${Black.res} resilience`)
// console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)
// console.log(`${Black.name} have ${Black.power} power and ${Black.res} resilience`)
// console.log(`${Red.name} have ${Red.power} power and ${Red.res} resilience`)