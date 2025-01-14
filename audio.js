class AudioControl {
    constructor() {
        this.charge = document.getElementById('charge');
        this.flapSounds = [
            document.getElementById('flap1'),
            document.getElementById('flap2'),
            document.getElementById('flap3'),
            document.getElementById('flap4'),
            document.getElementById('flap5')
        ];
        this.win = document.getElementById('win');
        this.lose = document.getElementById('lose');
    }

    play(sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
