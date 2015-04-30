game.NewProfile = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('new-screen')), -10); // TODO
                
                documents.getElementById("input").style.visibility = "visible";
                documents.getElementById("regester").style.visibility = "visible";
        
                me.input.unbindKey(me.input.KEY.B);
                me.input.unbindKey(me.input.KEY.Q);
                me.input.unbindKey(me.input.KEY.E);
                me.input.unbindKey(me.input.KEY.W);
                me.input.unbindKey(me.input.KEY.A);
                
        
        
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                      this._super(me.Renderable, 'init', [10, 10, 300, 50]); 
                      this.font = new me.Font("Arial", 26, "black");
                      
                    },
                    
                    draw: function(render){
                        this.font.draw(render.getContext(), "PICK A USERNAME AND PASSWORD", this.pos.x, this.pos.y);
                        
                    },
                        
                })));
                
       
        },

	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            documents.getElementById("input").style.visibility = "hidden";
            documents.getElementById("regester").style.visibility = "hidden";
        }
});
