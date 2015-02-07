/**
 * This is the starting point of the application.
 * Based on hash change, corresponding html is loaded.
 * 
 * Backbone.js is used to construct the page.
 * Router is initialized in this main function.
 */
requirejs.config({
    baseUrl: '.',
    paths: {
        backbone: 'scripts/lib/backbone',
        jquery: 'scripts/lib/jquery-1.11.2.min',
        appRouter: 'scripts/appRouter',
        underscore: 'scripts/lib/underscore',
        text:'scripts/lib/text',
        profile:'scripts/profile/profile',
        profileModel:'scripts/profile/profileModel',
        home:'scripts/home/home',
        homeModel:'scripts/home/homeModel',
        handlebars:'scripts/lib/handlebars-v2.0.0'
    }
});
define("main",[],function(){
	requirejs(["appRouter","backbone"],function(appRouter,Backbone){
		//call router to initialize
		new appRouter;
		Backbone.history.start();
	});
});