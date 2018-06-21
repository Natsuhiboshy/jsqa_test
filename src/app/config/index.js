'use strict';

(function () {
    console.h2('Config Module');

    require('../util/console');
    // Built-in NodeJS Modules
    const fs = require('fs');
    const path = require('path');

    let _config = '[Empty config]';
    const jsonPath = path.join(__dirname, '..', 'data', 'config.json');

    function _parseData(err, data) {
        if (err) {
            throw err;
        }
        _config = data;
    }

    function _loadConfig() {
        fs.readFile(jsonPath, 'utf8', _parseData);
    }

    function _loadConfigSync() {
        _config = fs.readFileSync(jsonPath, 'utf8');
    }

    function _readAbsolutePath() {
        fs.readFile('/etc/hosts', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('Sensitive data loaded:', data);
        });
    }

    // Export Module API
    exports.getConfig = () => {
        return _config;
    }

    exports.loadConfig = () => {
        _loadConfig();
    }

    exports.loadConfigSync = () => {
        _loadConfigSync();
        return _config;
    }
}());