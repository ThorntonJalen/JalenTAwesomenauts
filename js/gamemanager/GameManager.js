
game.HeroDeathManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
    },
    update: function() {
        if (game.data.player.dead) {
            me.game.world.removeChild(game.data.player);
            me.state.current().resetPlayer(10, 0);
        }

        return true;
    }
});


game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameOver = false;

    },
    update: function() {
        if (game.data.win === true && !this.gameOver) {
            this.gameOver(true);
        } else if (game.data.win === false && !this.gameOver) {
            this.gameOver(false);
        }

        return true;
    },
    gameOver: function() {
        if (win) {
            game.data.exp += 10;
        } else {
            game.data.exp += 1;
        }

        console.log(game.data.exp);
        this.bameOver = true;
        me.save.exp = game.data.exp;
        //for testing purposes only
        me.save.exp2 = 4;
    }

});
