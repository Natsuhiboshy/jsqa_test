/**
 * Lesson 13. 
 *  NodeJS Singleton MVC Application
 *  Lessons Factory
 */

'use strict';

(function () {
    // This is relative path
    require('../../util/console');   
    let _appFile = require('../../app.js');
    let _courseLoadedData = require ('../../course/course.js'); 

    console.h1('Lesson 13');

    //
    // Homework
    //
    console.h2('Homework Task 13.01');
    // Points: 1
    // In the app.config.json file, set startDate value to Tue, Apr 24, 2018
    let fs = require('fs');
    var path = require ('path');
    var jsonpath = path.join(__dirname, '..', '..', 'data', 'app.config.json');
    // fs.appendFile(jsonpath, 'startDate: Tue, Apr 24, 2018');
    let newData = 'Tue, Apr 24, 2018';
    fs.readFile(jsonpath, 'utf8', function(error, data){
        if (error){
            throw error;
        }
        var _changedData = data.replace('August 24, 1991 00:00:00', newData);
        fs.writeFile(jsonpath, _changedData, 'utf8', function (error, data){
            if (error){
                throw error;
            }
            console.log(' Task 13.01: File app.config.json was updated!');
        });
    });

    console.h2('Homework Task 13.02');
    // Points: 2
    // In the course module, export a new method, setStartDate(value). 
    // This method should set the startDate property to the value argument.
    // done

    console.h2('Homework Task 13.03');
    // Points: 3
    // In app.js file, in config loading callback, call the course.setStartDate method
    // and pass to it the value loaded from the config's startDate property.
    // Tip: you may need to use the JSON.parse method to get the value from loaded data.
    //done

    console.h2('Homework Task 13.04');
    // Points: 1
    // Ensure course.getStartDate() gives the correct value from the app.config.json file startDate property
    function task3verification (){
        let _downloadedData = fs.readFileSync(jsonpath, 'utf8');
        _downloadedData = JSON.parse(_downloadedData);
        
        if (_downloadedData.startDate === _courseLoadedData.getStartDate().toString()){
            console.log('Task 13.04: Task 13.03 was performed correct!\n', _courseLoadedData.getStartDate().toString());
        }
        else {
            console.log('Task 13.04: ', _courseLoadedData.getStartDate())
        }   
    }
    setTimeout(task3verification, 60*1000);

}());