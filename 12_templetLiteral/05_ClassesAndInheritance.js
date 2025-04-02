// prototypal inheritance
// function Player(name, team){
//     this.name = name;
//     this.team = team;
// }

// const virat = new Player("Virat Chokli", "RCB");
// const msd = new Player("MSD", "CSK");

// Player.prototype.greet = function(){
//     console.log(`Hello Im ${this.name}. and Im in ${this.team}`);
// }

// Player.prototype.nickname = "Something"

class Player{
    constructor(name, team){
        this.name = name;
        this.team = team;
    }
    greet(){
        console.log(`Im ${this.name} and Im in ${this.team}`);
    }
}

const virat = new Player("Virat Chokli", "RCB");
const msd = new Player("MSD", "CSK");

