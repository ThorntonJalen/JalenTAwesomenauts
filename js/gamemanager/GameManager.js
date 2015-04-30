
game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameOver = false;

    },
    update: function() {
        if (game.data.win === true && !this.gameOver) {
            this.gameOver(true);
            alert("YOU WIN!");
        } else if (game.data.win === false && !this.gameOver) {
            this.gameOver(false);
            alert("YOU LOSE!");
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


        $.ajax({
            type: "POST",
            url: "php/controller/save-user.php",
            data: {
                exp: game.data.exp,
                exp1: game.data.exp1,
                exp2: game.data.exp2,
                exp3: game.data.exp3,
                exp4: game.data.ex4p,
            },
            dataType: "text"
        })
                .success(function(response) {
                    if (response === "true") {
                        me.state.change(me.state.MENU)
                    } else {
                        alert(response);
                    }

                })
                .fail(function(response) {
                    alert("Fail");
                });


    }

});
