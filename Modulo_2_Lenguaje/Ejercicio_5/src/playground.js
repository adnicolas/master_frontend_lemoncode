class SlothMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        const randomValues = [Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5]
        if (randomValues.every(value => value)) {
            console.log(`Congratulations!!!. You won ${this.coins} coin${this.coins > 1 ? 's' : ''}!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlothMachine();
for (let i = 0; i < 5; i++) {
    machine1.play();
}