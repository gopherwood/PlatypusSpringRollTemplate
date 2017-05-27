/*global include, window */
(function () {
    "use strict";

    // Library dependencies
    var Application = include('springroll.Application'),
        Display = include('springroll.pixi.PixiDisplay'),
        app = new Application({ // Create a new application
            name: "_name_",
            canvasId: "stage",
            configPath: "assets/config/config.json",
            display: Display,
            displayOptions:    {
                clearView: true
            },
            enableHiDPI: true,
            preload: [
                {"id": "buttons",        "src": "assets/images/buttons.png"},
                {"id": "mookie",         "src": "assets/images/mookie.png"},
                {"id": "game-sprites",   "src": "assets/images/game-sprites.png"},
                {"id": "title-screen",   "src": "assets/images/title-screen.png"}
            ],
            responsive: true,
            state: "menu",
            version: "_version_"
        });

    // Handle when app is ready to use
    app.on('init', function () {
        // Start game
    });

    // Assign to the window for easy access
    window.app = app;
}());
