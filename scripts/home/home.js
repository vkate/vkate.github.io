/**
 * This is the profile view js
 */

define(['jquery','backbone','handlebars'],function($,backbone,handlebars){
	var profile = backbone.View.extend({
			initialize:function(){
				this.getData();
				this.render();
			},
			render:function(){
				var self = this;
				require(['text!home.html'],function(html){
					var c = handlebars.compile(html);
					var result = c(self.model.toJSON());
					self.$el.html(result);
				})
			},
			getData:function(){
				//setting hard coded values here.
				//naturally we call server here and get json data.
				// we call using this.model.fetch and save for GET and POST
				this.model.set({summaryText:"sadsadasdasdasdasds"});
			},
			events:{
				
			}
	})
	return profile;
})