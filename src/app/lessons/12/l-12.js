/**
 * Lesson 12. 
 *  NodeJS
 *      Loading and Writing Files
 *          fs module
 *          path module
 *          Using Relative Paths
 *          readFile vs readFileSync
 *          Asynchronous Code vs Synchronous Code
 *      Callbacks in Practice
 *  Loading App Config via Singleton Service
 */

'use strict';

(function () {
    // This is relative path!
    require('../../util/console');
    let fs = require('fs');
    var path = require('path');
    var jsonPath = path.join(__dirname, '..', '..', 'data', 'config.json');

    console.h1('Lesson 12');
    console.h2('Load file:');

    // Read File using absolute path, asynchronously:
    // fs.readFile('/etc/hosts', 'utf8', function (err, data) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data);
    // });

    // Load Students, asynchronously:
    fs.readFile(jsonPath, 'utf8', function (err, data) {
        if (err) {
            return console.log('Data load error: ', err);
        }
        console.log(data);
    });

    //
    // Homework
    //
    console.h2('Homework Task 12.01');
    // Points: 2
    // Please write an example of reading the 'src/app/data/config.json' file by absolute path, synchronously (!)


    console.h2('Homework Task 12.02');
    // Points: 2
    // Please write an example of reading the 'src/app/data/config.json' file by relative path, asynchronously
    // Tip: you may need 'path' module for it, see above


    console.h2('Homework Task 12.03');
    // Points: 4
    // Implement Config module (src/app/config.index.js) as a singleton to be used by other modules


}());