game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODO
	
                me.input.bindKey(me.input.KEY.F1, "F1" );
                me.input.bindKey(me.input.KEY.F2, "F2" );
                me.input.bindKey(me.input.KEY.F3, "F3" );
                me.input.bindKey(me.input.KEY.F4, "F4" );
                me.input.bindKey(me.input.KEY.F5, "F5" );
                var exp1cost = ((Number(game.data.exp1) + 1) * 10);
        
        
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                      this._super(me.Renderable, 'init', [270, 240, 300, 50]); 
                      this.font = new me.Font("Arial", 26, "white");
                      
                    },
                    
                    draw: function(render){
                        this.font.draw(render.getContext(), "PRESS F1-F4 TO BUY, F5 TO SKIP", this.pos.x, this.pos.y);
                        this.font.draw(render.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
                        this.font.draw(render.getContext(), "F1: INCREASE GOLD PRODUCTION " + game.data.exp1.toString() + "COST:" + ((game.data.exp1 + 1) * 10), this.pos.x + 100, this.pos.y + 100);
                        this.font.draw(render.getContext(), "F2: AND STARTING GOLD" , this.pos.x + 100, this.pos.y + 150);
                        this.font.draw(render.getContext(), "F3: INCRESE ATTACK DAMAGE" , this.pos.x + 100, this.pos.y + 200);
                        this.font.draw(render.getContext(), "F4: INCREASE STARTING HEALTH", this.pos.x + 100, this.pos.y + 250);
                        
                    },
                        
                })));
                
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    if(action === "F1"){
                        if(game.data.exp >= exp1cost){
                            game.data.exp += 1;
                            game.data.exp -= exp1cost;
                            me.state.change(me.state.PLAY);
                        }else{
                            console.log("nott enough experience");
                        }
                    }else if(action === "F2"){
                        
                    }else if(action === "F3"){
                        
                    }else if(action === "F4"){
                        
                    }else if(action === "F5"){
                        me.state.change(me.state.PLAY);
                    }
                    
                });
        },

	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
                me.input.unbindKey(me.input.KEY.F1, "F1" );
                me.input.unbindKey(me.input.KEY.F2, "F2" );
                me.input.unbindKey(me.input.KEY.F3, "F3" );
                me.input.unbindKey(me.input.KEY.F4, "F4" );
                me.input.unbindKey(me.input.KEY.F5, "F5" );
                me.event.unsubscribe(this.handler);
        }
});
