/*global include, platypus */
(function () {
    "use strict";

	// Library dependencies
	var Application = include('springroll.Application'),
		Display = include('_displayClass_'),
        app = new Application({ // Create a new application
            name: "_name_",
            canvasId: "stage",
		    configPath: "assets/config/config.json",
            display: Display,
            displayOptions:	{
                clearView: true
            }
        });

	// Handle when app is ready to use
	app.on('init', function () {
		// Start game
        window.game = new platypus.Game(this.config);
	});

    // Handle game ticking
	app.on('update', function (elapsed) {
		// Update game
        window.game.tick({
            delta: elapsed
        });
	});

	// Assign to the window for easy access
	window.app = app;
	
}());
