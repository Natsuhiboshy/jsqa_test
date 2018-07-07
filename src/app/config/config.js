'use strict';

(function () {

    // Built-in NodeJS Modules
    const fs = require('fs');
    const path = require('path');
    require('../util/console');
    
    const configModule = (function(){
        let instance;

        function init() {
            // Private method
            function _loadConfig(filename, callback) {
                const jsonPath = path.join(__dirname, '..', 'data', filename);
                fs.readFile(jsonPath, 'utf8', callback);
            }
            // Export Module API
            return {
                loadConfig: _loadConfig
            }
        }

        // Singleton pattern boilerplate
        return {
            getInstance: function() {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
        }
    }());
    exports.getInstance = configModule.getInstance;
}());
