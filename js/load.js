/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

SkeetSkeet.Load = function(game){};

SkeetSkeet.Load.prototype = {
    preload: function() {
        console.log('inside load state');
        /* Load audio files. */
        this.load.audio('thunder', 'audio/hpds_splash_audio.mp3');
        // this.load.audio('guelstie', 'audio/Guelstie.wav');
        this.load.audio('music', 'audio/allStarTrio.mp3');
        this.load.audio('pull', 'audio/pull-pigeon.mp3');
        this.load.audio('destroy', 'audio/destroy-pigeon.mp3');
        this.load.audio('beep', 'audio/beep.wav');
        this.load.audio('beep2', 'audio/beep2.wav');
        
        /* Load atlas files for images. */
        this.load.atlas('splash', 'images/hpds_splash_screen.png', 
                'images/hpds_splash_screen.json');
        // this.load.atlas('guelstieSplash', 'images/guelstieLogo/guelstieLogo.png',
        //         'images/guelstieLogo/guelstieLogo.json');
        this.load.atlas('skeet', 'images/Skeet/Skeet.png',
                'images/Skeet/Skeet.json');
        this.load.atlas('skeetDestroyed', 'images/SkeetDestroyed/SkeetDestroyed.png',
                'images/SkeetDestroyed/SkeetDestroyed.json');
        
        /* Load images. */
        this.load.image('platform', 'images/platform.png');
        this.load.image('background', 'images/background.jpg');
        this.load.image('box', 'images/box.png');
    }, 
    create: function() {
        this.state.start('splash');
    }
};
