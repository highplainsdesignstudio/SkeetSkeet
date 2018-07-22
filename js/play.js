/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


SkeetSkeet.Play = function(game) {};

var round = 10;
var countdown;
var timerShadow, timer;
var beep;

SkeetSkeet.Play.prototype = {
    
    create: function() {
        /*
         * Create the background.
         */
        var background = this.add.image(this.world.centerX, this.world.centerY,
                'background');
        background.anchor.setTo(.5, .5);
        
        /*
         * Display the score.
         */
        this.score = 0; // reset the score from previous games.
        this.scoreText = this.displayScore();
        
        /*
         * Show the 3, 2, 1 countdown.
         */
        countdown = 3;
        timerShadow = this.add.text(this.world.centerX+5, this.world.centerY-145,
                '3...');
        timerShadow.fontSize = 24;
        timerShadow.addColor('#252b41', 0);
        timer = this.add.text(this.world.centerX, this.world.centerY-150,
                '3...');
        timer.fontSize = 24;
        timer.addColor('white', 0);

        beep = this.add.audio('beep');
        beep.play();
        
        this.time.events.repeat(Phaser.Timer.SECOND * 1, 2, this.startClock, this);

        /* 
         * Set the loop of skeet shots.
         */
        this.time.events.repeat(Phaser.Timer.SECOND * 4, 10, this.setUpSkeets,
                this); 
    },
    
    startClock: function() {
        countdown--;
        timerShadow.text = countdown + '...';
        timer.text = countdown + '...';
        beep.play();
        if (countdown === 1) {
            var beep2 = this.add.audio('beep2');
            this.time.events.add(Phaser.Timer.SECOND * 1, function() {
                timerShadow.destroy();
                timer.destroy();
                beep2.play(); 
            });
        }
    },
    
    setUpSkeets: function() {
        /*
         * Create a switch statement to decide from 3 different patterns.
         */
        var count = this.rnd.between(1, 3);
        switch(count) {
            case 1:
                this.createLeftSkeet();
                this.createRightSkeet();
                break;
            case 2:
                this.createLeftSkeet();
                this.createRightSkeet();
                this.createLowerLeftSkeet();
                break;
            case 3:
                this.createLeftSkeet();
                this.createRightSkeet();
                this.createLowerLeftSkeet();
                this.createLowerRightSkeet();
                break;
        }
        var pull = this.add.audio('pull', .5);
        pull.play();
        round--;
        console.log(round);
    },
    
    createLeftSkeet: function() {
        var x = 0;
        var y = this.world.centerY + 100;
        var gravity = this.rnd.between(75, 150);
        var bodyAngle = -this.rnd.realInRange(0.523599, 0.785398);
        var velocityX = this.rnd.between(150, 250);
        var velocityY = this.rnd.between(5, 20);
        var accelerationX = this.rnd.between(250, 350);
        var accelerationY = this.rnd.between(5, 20);
        this.launchSkeet(x, y, gravity, bodyAngle,
                velocityX, velocityY, accelerationX, accelerationY);
    },
    
    createLowerLeftSkeet: function() {
        var x = 100;
        var y = this.world.height;
        var gravity = this.rnd.between(75, 150);
        var bodyAngle = -this.rnd.realInRange(0.785398, 1.0472);
        var velocityX = this.rnd.between(150, 250);
        var velocityY = this.rnd.between(5, 20);
        var accelerationX = this.rnd.between(250, 350);
        var accelerationY = this.rnd.between(5, 20);
        this.launchSkeet(x, y, gravity, bodyAngle,
                velocityX, velocityY, accelerationX, accelerationY);
    },
    
    createRightSkeet: function() {
        var x = this.world.width;
        var y = this.world.centerY + 100;
        var gravity = this.rnd.between(75, 150);
        var bodyAngle = -this.rnd.realInRange(2.35619, 2.61799);
        var velocityX = -this.rnd.between(150, 250);
        var velocityY = this.rnd.between(5, 20);
        var accelerationX = -this.rnd.between(250, 350);
        var accelerationY = this.rnd.between(5, 20);
        this.launchSkeet(x, y, gravity, bodyAngle,
                velocityX, velocityY, accelerationX, accelerationY);
    },
    
    createLowerRightSkeet: function() {
        var x = this.world.width - 100;
        var y = this.world.height;
        var gravity = this.rnd.between(75, 150);
        var bodyAngle = -this.rnd.realInRange(2.0944, 2.35619);
        var velocityX = -this.rnd.between(150, 250);
        var velocityY = this.rnd.between(5, 20);
        var accelerationX = -this.rnd.between(250, 350);
        var accelerationY = this.rnd.between(5, 20);
        this.launchSkeet(x, y, gravity, bodyAngle,
                velocityX, velocityY, accelerationX, accelerationY);
    },
    
    launchSkeet: function(x, y, gravity, bodyAngle, velocityX, velocityY, 
            accelerationX, accelerationY) {

        var skeet = this.add.sprite(x, y, 'skeet', 'Skeet0.png');
        skeet.width = skeet.width * 1.5;
        skeet.height = skeet.height * 1.5;
        this.physics.arcade.enable(skeet);
        skeet.inputEnabled = true;
        skeet.input.useHandCursor = true;
        skeet.body.gravity.y = gravity;
        skeet.body.angle = bodyAngle;
        skeet.body.maxVelocity.x = 3000;
        skeet.body.maxVelocity.y = 1500;
        skeet.body.velocity.x = velocityX;
        skeet.body.velocity.y = velocityY;
        skeet.body.acceleration.x = accelerationX;
        skeet.body.acceleration.y = accelerationY;
        skeet.anchor.setTo(.5, .5);
        var anim1 = skeet.animations.add('skeetFly', null, 60, true, false);
        anim1.play();        

        skeet.body.moveFrom(3000, 250);
        
        skeet.events.onInputDown.add(this.destroySkeet, this);        
    },
    
    destroySkeet: function(sprite) {
        /* The destruction animation. */
        var skeet2 = this.add.sprite(sprite.x, sprite.y, 'skeetDestroyed', 'SkeetDestroyed0.png');
        skeet2.anchor.setTo(.5, .5);
        skeet2.width = skeet2.width * 1.5;
        skeet2.height = skeet2.height * 2;
        var anim2 = skeet2.animations.add('skeetDestroy', null, 20, false, false);
        sprite.destroy();
        var destroy = this.add.audio('destroy', .5);
        destroy.play();
        anim2.play(null, false, true);
        
        /*
         * Update the score.
         */
        this.score += 1;
        this.scoreText[0].text = 'Skeets Destroyed: ' + this.score;
        this.scoreText[1].text = 'Skeets Destroyed: ' + this.score;
        
    },
    
    score: 0,
    displayScore: function() {
        var shadow = this.add.text(this.world.centerX / 2 + 5, 50+5, 'Skeets Destroyed: ' + this.score);
        shadow.anchor.setTo(.5, .5);
        shadow.font = 'Diplomata SC';
        shadow.fontSize = 20;
        shadow.addColor('#252b41', 0);
        var text = this.add.text(this.world.centerX / 2, 50, 'Skeets Destroyed: ' + this.score);
        text.anchor.setTo(.5, .5);
        text.font = 'Diplomata SC';
        text.fontSize = 20;
        text.addColor('white', 0);
        return [shadow, text];
        
        
    },
    scoreText: ['', ''],
    update: function () {
        if (round === 0) {
            this.playAgain();
        }
    }, 
    
    playAgain: function() {
        round = 10;
        this.time.events.add(Phaser.Timer.SECOND * 4, function() {
                    this.scoreText[0].destroy();
                    this.scoreText[1].destroy();            
                    var playAgainShadow = this.add.text(this.world.centerX+5, this.world.centerY-120,
                            'You destroyed ' + this.score + ' skeets! Click to play again!');
                    playAgainShadow.anchor.setTo(.5, .5);
                    playAgainShadow.addColor('#252b41', 0);
                    playAgainShadow.fontSize = 28;
                    var playAgain = this.add.text(this.world.centerX, this.world.centerY-125,
                            'You destroyed ' + this.score + ' skeets! Click to play again!');
                    playAgain.anchor.setTo(.5, .5);
                    playAgain.addColor('white', 0);
                    playAgain.fontSize = 28;
                    this.input.onTap.add(function() { game.state.start('play'); });            
                }, this);
    }
};