'use strict'

class Weapon {
    constructor({ name, attack, durability, range }) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.fullDurability = durability;
    }

    takeDamage(damage) {
        this.durability -= damage;
        this.durability < 0 ? this.durability = 0 : this.durability;
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability < this.fullDurability * 0.3) {
            return this.attack / 2;
        }
        return this.attack;
    }

    isBroken() {
        return this.durability ? false : true;
    }
}

const arm = new Weapon({ name: 'Рука', attack: 1, durability: Infinity, range: 1 });
const bow = new Weapon({ name: 'Лук', attack: 10, durability: 200, range: 3 });
const sword = new Weapon({ name: 'Меч', attack: 25, durability: 500, range: 1 });
const knife = new Weapon({ name: 'Нож', attack: 5, durability: 300, range: 1 });
const staff = new Weapon({ name: 'Посох', attack: 8, durability: 300, range: 2 });
const longBow = new Weapon({ name: 'Длинный лук', attack: 15, durability: 200, range: 4 });
const axe = new Weapon({ name: 'Секира', attack: 27, durability: 800, range: 1 });
const stormStaff = new Weapon({ name: 'Посох Бури', attack: 10, durability: 300, range: 3 });

class Arm extends Weapon {
    constructor() {
        super(arm);
    }
}

class Bow extends Weapon {
    constructor() {
        super(bow);
    }
}

class Knife extends Weapon {
    constructor() {
        super(knife);
    }
}

class Staff extends Weapon {
    constructor() {
        super(staff);
    }
}

class Sword extends Weapon {
    constructor() {
        super(sword);
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира'
        this.attack = 27,
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури'
        this.attack = 10,
        this.range = 3;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = "Длинный лук",
        this.attack = 15,
        this.range = 4;
    }
}
