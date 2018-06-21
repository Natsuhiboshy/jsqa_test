'use strict';

const L12SyngleTone = (function () {
    let firstinit;
    function OneInit (){
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
    function _readAbsolutePath() {
        fs.readFile('/etc/hosts', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('Sensitive data loaded:', data);
        });
    }
return {
    _loadConfig: function () {
        fs.readFile(jsonPath, 'utf8', _parseData);
    },
    _loadConfigSync: function () {
        _config = fs.readFileSync(jsonPath, 'utf8');
    },
    getConfig: _config
}
}   
return {
    configSyngletone: function  (){
        if (!firstinit){
            firstinit = OneInit();
        }
        return firstinit;
    }  
} 
})();
     // Export Module API
   /*  exports.getConfig = () => {
        return firstinit._config;
    }
    
    exports.loadConfig = () => {
        firstinit._loadConfig();
    }
    
    exports.loadConfigSync = () => {
        firstinit._loadConfigSync();
        return firstimit._config;
    }*/
    exports.confSingle = () => {
        L12SyngleTone.configSyngletone();
    }