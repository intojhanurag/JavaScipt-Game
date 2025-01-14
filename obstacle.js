class Obstacle {
    constructor(game, x) {
        this.game = game;
        this.x = x;
        this.y = Math.random() * (this.game.height - 200) + 50;
        this.width = 50 * this.game.ratio;
        this.height = 50 * this.game.ratio;
        this.image = document.getElementById('smallGears');
        this.collisionRadius = this.width / 2;
    }

    resize() {
        this.width = 50 * this.game.ratio;
        this.height = 50 * this.game.ratio;
        this.collisionRadius = this.width / 2;
    }

    update() {
        this.x -= this.game.speed;
        this.y += Math.sin(this.x * 0.05) * 5;  // Makes the gear move up and down

        if (this.x + this.width <= 0) {
            this.x = this.game.width;
            this.y = Math.random() * (this.game.height - 200) + 50;
        }
    }

    draw() {
        this.game.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
