/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


SkeetSkeet.Menu = function(game) {};

SkeetSkeet.Menu.prototype = {
    create: function() {
        var background = this.add.image(this.world.centerX, this.world.centerY,
                'background');
        background.anchor.setTo(.5, .5);
        var music = this.add.audio('music', .75, true);
        music.play();
 
        /* The title text. */
        var box = this.add.image(this.world.centerX, this.world.centerY, 'box');
        box.anchor.setTo(.5, .5);
        var title = this.add.text(this.world.centerX+10, this.world.centerY - 65,
                'Skeet Skeet!');
        title.anchor.setTo(.5, .5);
        title.addColor('#252b41', 0);
        title.font = 'Diplomata SC';
        title.fontSize = 32;
        title.height = 64;
        var shadow = this.add.text(this.world.centerX, this.world.centerY - 75,
                'Skeet Skeet!');
        shadow.anchor.setTo(.5, .5);
        shadow.addColor('white', 0);
        shadow.font = 'Diplomata SC';
        shadow.fontSize = 32;
        shadow.height = 64;
        
        /* Click to play text. */
        var shadow2 = this.add.text(this.world.centerX+10, this.world.centerY+10,
                'Click to Play');
        shadow2.anchor.setTo(.5, .5);
        shadow2.font = 'Diplomata SC'; 
        shadow2.addColor('#252b41', 0);
        var play = this.add.text(this.world.centerX, this.world.centerY,
                'Click to Play');
        play.anchor.setTo(.5, .5);
        play.font = 'Diplomata SC';
        play.addColor('white', 0);        
        /* Input for onTap. */
        this.input.onTap.add(function() { game.state.start('play'); });
    }
};