/**
 * This is the router for the app
 */
define("appRouter",['jquery','backbone','text'],function($,backbone,text){
	var router = backbone.Router.extend({
		initialize:function(){
			
		},
		routes:{
			"*actions":"genericRoute"
		},
		genericRoute:function(fragment){
			if(fragment == null || fragment == undefined || fragment == "home"){
				//go to home page.
				//window.location.href="index.html";
				requirejs(['home','home'+"Model"],function(view,model){
					//initialize the backbone view here.
					new view({model: model,el: "#main"});
				});
			}else{
				requirejs([fragment,fragment+"Model"],function(view,model){
					//initialize the backbone view here.
					new view({model: model,el: "#main"});
				});
			}
		}
	})
	return router;
});