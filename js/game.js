/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var game = new Phaser.Game(1000, 500, Phaser.AUTO);

/* Load Google Web Fonts. */
WebFont.load({
google: {
  families: ['Diplomata SC']
}
});


game.state.add('boot', SkeetSkeet.Boot);
game.state.add('load', SkeetSkeet.Load);
game.state.add('splash', SkeetSkeet.Splash);
game.state.add('menu', SkeetSkeet.Menu);
game.state.add('play', SkeetSkeet.Play);
game.state.start('boot');
