/**
 * Lesson 13. 
 *  NodeJS Singleton MVC Application
 *  Lessons Factory
 */

'use strict';

(function () {
    // This is relative path
    require('../../util/console');    

    console.h1('Lesson 13');

    //
    // Homework
    //
    console.h2('Homework Task 13.01');
    // Points: 1
    // In the app.config.json file, set startDate value to Tue, Apr 24, 2018

    console.h2('Homework Task 13.02');
    // Points: 2
    // In the course module, export a new method, setStartDate(value). 
    // This method should set the startDate property to the value argument.

    console.h2('Homework Task 13.03');
    // Points: 3
    // In app.js file, in config loading callback, call the course.setStartDate method
    // and pass to it the value loaded from the config's startDate property.
    // Tip: you may need to use the JSON.parse method to get the value from loaded data.

    console.h2('Homework Task 13.04');
    // Points: 1
    // Ensure course.getStartDate() gives the correct value from the app.config.json file startDate property

}());