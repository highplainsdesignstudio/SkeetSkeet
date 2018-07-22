/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var SkeetSkeet = {};
SkeetSkeet.Boot = function(game){};

SkeetSkeet.Boot.prototype = {
    preload: function() {
        console.log('inside boot');
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('load');
    }
}
