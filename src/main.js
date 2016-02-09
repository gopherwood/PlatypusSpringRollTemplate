/*global include, platypus */
(function () {
    "use strict";

    // Example of a custom component being created prior to its use by an entity (referenced by its provided id). "createComponentClass" adds the new component to the list of available components.
    (function () {
        return platypus.createComponentClass({
            id: "LogicHero",
            constructor: function (definition) {
                
            },
            events: {
                "handle-logic": function () {

                }
            }
        });
    }());

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
            },
            preload: [
                {"id": "buttons",        "src": "assets/images/buttons.png"},
                {"id": "mookie",         "src": "assets/images/mookie.png"},
                {"id": "game-sprites",   "src": "assets/images/game-sprites.png"},
                {"id": "title-screen",   "src": "assets/images/title-screen.png"}
            ],
            responsive: true,
            state: "menu"
        });

	// Handle when app is ready to use
	app.on('init', function () {
		// Start game
	});

	// Assign to the window for easy access
	window.app = app;
}());
