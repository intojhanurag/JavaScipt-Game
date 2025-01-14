class Background {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = this.game.width;
        this.height = this.game.height;
        this.background1 = document.getElementById('background');
        this.background2 = document.getElementById('background2');
    }

    resize() {
        this.width = this.game.width;
        this.height = this.game.height;
    }

    update() {
        this.x -= 1 * this.game.ratio;
        if (this.x <= -this.width) {
            this.x = 0;
        }
    }

    draw() {
        this.game.ctx.drawImage(this.background1, this.x, this.y, this.width, this.height);
        this.game.ctx.drawImage(this.background2, this.x + this.width, this.y, this.width, this.height);
    }
}
