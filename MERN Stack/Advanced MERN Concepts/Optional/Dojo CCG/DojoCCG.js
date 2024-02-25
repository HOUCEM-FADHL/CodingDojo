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
    constructor(name, cost, effect) {
        super(name, cost);
        this.effect = effect;
    }
    play(target) {
        if (target instanceof Unit) {
        // implement card text : "Raise / Lower the target's resilience / power by amount"
        // target.power += this.effect;
        target.res += this.effect;
        if(this.effect<0){
            console.log(`Lower ${target.name}'s resilience by ${-this.effect}`)
        } else if(this.effect>0){
        console.log(`Increase ${target.name}'s resilience by ${this.effect}`)
        }
        } else {
        throw new Error("Target must be a unit!");
        }
    }
}

const card1 = new Unit ("Black Belt", 10,10,10)
const card2 = new Unit ("Red Belt",10,10,15)
const cardEffect1 = new Effect ("Hard Algorithm", 10, 3)
const cardEffect2 = new Effect ("Easy Algorithm", 10, -3)
console.log(`${card1.name} have ${card1.power} power and ${card1.res} resilience`)
console.log(`${card2.name} have ${card2.power} power and ${card2.res} resilience`)
card1.attack(card2)
console.log(`${card1.name} have ${card1.power} power and ${card1.res} resilience`)
console.log(`${card2.name} have ${card2.power} power and ${card2.res} resilience`)
cardEffect1.play(card1)
cardEffect2.play(card2)
console.log(`${card1.name} have ${card1.power} power and ${card1.res} resilience`)
console.log(`${card2.name} have ${card2.power} power and ${card2.res} resilience`)