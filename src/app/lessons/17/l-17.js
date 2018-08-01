/**
 * Leson 17. Using regular expressions to parse homeworks.
 * Reading file's output.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');
    // Import using module name

    let cp = require('child_process');
    cp.exec('echo "The \\$HOME dir is $HOME"', readOutput);

    // Read output:
    function readOutput(err, data) {
        if (err) {
            console.error(err, 'code: ', err.code, 'signal:', err.signal);
        }
        console.log('Output:', data);
    };

    // Execute lesson to get output:
    function executeLesson(lessonId, callback) {
        cp.exec('node src/app/lessons/' + lessonId + '/l-' + lessonId + '.js', function(error, stdout, stderr) {
            callback(stdout);
        });
    }

    function parseLessonOutput(lessonOutput) {
        console.log('Lesson output:', lessonOutput);
    }

    // Uncomment to see it in work
    // executeLesson('02', parseLessonOutput);

    // 
    // Homework
    //

    console.h2('Lesson 17 Homework');

    console.h3('Homework Task 17.01. Points: 1');
    // Review Lesson 17 Slides and complete this sentence:
    console.log('child_process.spawn returns a ...');

    console.h3('Homework Task 17.02. Points: 1');
    // Review Lesson 17 Slides and complete this sentence:
    console.log('child_process.exec returns a ...');

    console.h3('Homework Task 17.03. Points: 3');
    // Write a function which executes command of your choice in the shell using child_process.exec method.
    // Output the result to console
    // TODO: Write code here

})();