/*global include, platypus */
(function () {
    "use strict";

    // Example of a custom component being created prior to its use by an entity (referenced by its provided id). "createComponentClass" adds the new component to the list of available components.
    (function () {
        return platypus.createComponentClass({
            id: "LogicHero",
            constructor: function (definition) {
                var state = this.state = this.owner.state;
                state.swing = false;
                state.swingHit = false;
                
                this.teleportDestination = undefined;
                this.justTeleported = false;
            },
            events: {
                "handle-logic": function () {
                },
                "portal-waiting": function (portal) {
                    portal.trigger('activate-portal');
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
            }
        });

	// Handle when app is ready to use
	app.on('init', function () {
		// Start game
	});

	// Assign to the window for easy access
	window.app = app;
}());
