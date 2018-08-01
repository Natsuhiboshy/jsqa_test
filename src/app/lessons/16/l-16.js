/**
 * Leson 16. Using regular expressions to parse homeworks.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');
    // Import using module name
    let fs = require('fs');
    let path = require('path');

    console.h1('Lesson 16. Using regular expressions to parse homeworks.');

    const lessonIds = ['01'];
    // const lessonIds = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    const lessonSolutions = {
        '01': {
            '01': 'answer: ye+s',
            '02': 'use strict;',
            '03': '',
            '04': 'object,* *array,* *function',
            '05': 'function Differencer *\(a, b\)\{return a-b;\}',
        },
        '02': [ ],
        '03': [ ],
        '04': [ ],
        '05': [ ],
        '06': [ ],
        '07': [ ]
    };

    function loadLessonAsAText(lessonId, callback, lessonArray) {
        let lessonFilePath = path.join(__dirname, '..', lessonId, 'l-' + lessonId + '.js');

        function augmentedCallback(err, data) {
            callback(err, data, lessonArray, lessonId);
        };

        fs.readFile(lessonFilePath, 'utf8', augmentedCallback);    
    }

    function parseLoadedLessonText(err, lessonText, lessonArray, lessonId) {
        if (err) {
            console.log('Error loading file:', err);
        }
        if (!lessonArray||typeof(lessonArray)!=='object'){
            console.log('Incorrect input');
            return;
        }

        console.log('Loaded Lesson Text:', lessonText);
        // console.log('Loaded Lesson by ID:', lessonId);
        console.log(`Lesson ${lessonId} Answers: ${lessonArray[lessonId]}`);
        let taskIdArray = [];
        for (var id in lessonArray[lessonId]){
            taskIdArray.push(id);
            console.log('id: ', id);
        }
        console.log('taskIdArray', taskIdArray);
        let counter = 1;
        for (var task in lessonArray[lessonId]){
            if (counter<taskIdArray.length){
                console.log('-------------- Task text: ', extractTaskById(task, lessonId, taskIdArray[counter]));
                console.log('-------------- Answer matches: ', checkTaskById(task, extractTaskById(task, lessonId,  taskIdArray[counter]), lessonId));
                counter++;
            }
            else {
                console.log('-------------- Task text: ', extractTaskById(task, lessonId));
                console.log('-------------- Answer matches: ', checkTaskById(task, extractTaskById(task, lessonId), lessonId));
            }
        }
        function extractTaskById(taskId, lessonId, nextTaskId) {
            // let taskStartRegExp = /Task 01\.01/g;
            let taskStartRegExp = new RegExp('Task ' + lessonId + '\.' + taskId, 'g');
            let taskEndRegExp;
if(!nextTaskId){
// let taskEndRegExp = /Task 01\.02/g;
taskEndRegExp = new RegExp('Lesson '+ lessonId + ' Homework - End', 'g');
}
else {
// let taskEndRegExp = /Task 01\.02/g;
taskEndRegExp = new RegExp('Task ' + lessonId + '\.' + nextTaskId, 'g');
} 
   
taskStartRegExp.test(lessonText);
taskEndRegExp.test(lessonText);

console.log('Start index:', taskStartRegExp.lastIndex);
console.log('End index:', taskEndRegExp.lastIndex);

return lessonText.substring(taskStartRegExp.lastIndex, taskEndRegExp.lastIndex);
}

function checkTaskById(taskId, taskText, lessonId) {
let answerRegExp = new RegExp(lessonSolutions[lessonId][taskId], 'i');
return answerRegExp.test(taskText)
}      
    }

    function loadAndParseAllLessonsAsAText() {
        for (let i = 0; i < lessonIds.length; i++) {
            loadLessonAsAText(lessonIds.toString(), parseLoadedLessonText, lessonSolutions);
        }
    }

    loadAndParseAllLessonsAsAText();

    //
    // Homework
    //

    console.h2('Lesson 16 Homework');

    console.h3('Homework Task 16.01. Points: 2');
    // Update the lessonSolutions array. Add Lesson 01 Task 04 solution to it.

    console.h3('Homework Task 16.02. Points: 3');
    // Update the lessonSolutions array. Add Lesson 01 Task 05 solution to it.

    console.h3('Homework Task 16.03. Points: 4');
    // Update the parseLoadedLessonText function. Make it to analyze all Lesson's task, not only the first one.


})();