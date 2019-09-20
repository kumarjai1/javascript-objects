//2.ME 
const me =  {
    name: "Kristyn",
    age: 42,
    email: "kristyn@foo.bar"
};

console.log(me);
console.log(me.name);
me['age'] = 43;
console.log(me.age);
me['place of residence'] = "New York";
console.log(me['place of residence']);

//3.Silmer
console.log("\n")
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something",
    introduce: function() {
        console.log(`${this.name} is ${this.color} and a weird ${this.type}`);
    }
 }

console.log(monster.name);
monster.type = "creature";
monster.age = 6;
console.log(monster);
monster.introduce();

//4. Ogres
console.log("\n\n------Starting Zong, the Ogre vs. Zilla, the Adventurer Battle. Get ready for the bloodiest war of the century------\n")
let hitpointsO = 200;
let hitpointsA = 200;
const ogre = {
    name: 'Zong',
    color: 'purple',
    attacks: ['punch', 'kick', 'combo'],
    attack: function() {
        let randomAttack = this.attacks[parseInt(Math.random() * this.attacks.length)];
        if (hitpointsA < 0) {
            console.log("fuck")
        }
        else {
            if(randomAttack === 'punch') {
                hitpointsA -= parseInt(Math.random()*20); //lose between 0-30 points
                console.log(`${this.name} attacks ${adventurer.name} with a ${randomAttack}, leaving ${adventurer.name} with the health of ${hitpointsA}`);
            } else if (randomAttack === 'kick') {
                hitpointsA -= parseInt(Math.random()*40); //lose between 0-60 points
                console.log(`${this.name} attacks ${adventurer.name} with a ${randomAttack}, leaving ${adventurer.name} with the health of ${hitpointsA}`);
            } else if (randomAttack === 'combo') {
                hitpointsA -= parseInt(Math.random()*80); //lose between 0-80 points
                //console.log(`Critical attack with a ${randomAttack}`);
                console.log(`${this.name} attacks ${adventurer.name} with a beautiful ${randomAttack}, leaving ${adventurer.name} damaged with the health of only ${hitpointsA} to spare`);
            }
        }
        
        
    }
}
const adventurer = {
    name: 'Zilla',
    color: 'green',
    attack: function () {
        if (hitpointsO < 0) {
            console.log("fucks")
        } else {
            hitpointsO -= 20; //the ogre loses 15 health at every attack by the Adventurer
            console.log(`${this.name} attacks ${ogre.name}, leaving ${ogre.name} damaged with the health of ${hitpointsO} to spare`);
        }
        
    }
}

const game = { 
    init: function () {
        while ((hitpointsO >= 0) && (hitpointsA >= 0)) {
                ogre.attack();
                adventurer.attack();
        }
    },
}
game.init();
console.log((hitpointsA > 0) ? `The amazing underdog ${adventurer.name} has won!` : `The great defending champion ${ogre.name} has won!`);
