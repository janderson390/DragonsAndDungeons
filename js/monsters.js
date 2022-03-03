// This is temporary

let monster = {
    skeleton: {
        name: "Skeleton",
        atk: 2,
        dex: 3,
        con: 26
    },
    zombie: {
        name: "Zombie",
        atk: 1,
        dex: 1,
        con: 38
    },
    lamp: {
        name: "Giant Sentient Lamp",
        atk: 3,
        dex: 1,
        con: 50
    },
    pickle: {
        name: "A pickle",
        atk: 7,
        dex: 8,
        con: 50
    }
    
}


class Monster {
    constructor(monsterName) {
        this.monsterName = monster[monsterName].name;
        this.atk = monster[monsterName].atk;
        this.dex = monster[monsterName].dex;
        this.con = monster[monsterName].con;
    }
}
