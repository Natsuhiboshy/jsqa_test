/**
 * Leson 17. Using regular expressions to parse homeworks.
 * Reading file's output.
 */

'use strict';

(function () {

    // Import using relative file
    require('../../util/console');

    console.h1('Lesson 18 Started!');

    // async / await function example
    function resolveIn2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Resolved in 2 seconds');
            }, 2000)
        });
    }

    async function asyncCall() {
        console.log('calling async');
        const result = await resolveIn2Seconds();
        console.log('Result:', result);
    }

    asyncCall();

    // Old School:
    function saySomething(message) {
        console.log('Got message:', message);
    }

    setTimeout(() => saySomething("1 second passed"), 1000);

    // Promise way:
    const wait = ms => new Promise((resolve, reject) => {
        // reject('Something strange happened!');
        setTimeout(resolve, ms);
    })

    wait(3000).then(() => saySomething('3 sec passed')).catch(errorMessage => {
        console.log('Error:', errorMessage);
    });

    // 
    // Homework
    //

    console.h2('Lesson 18 Homework');

    console.h3('Homework Task 18.01. Points: 1');
    // Review Lesson 18 Slides and complete the sentence:
    console.log('To create asynchronous function, use ... keyword before the function declaration');

    console.h3('Homework Task 18.02. Points: 2');
    // Review this file.
    // Write and call a new function, 'delay' which accepts a number of seconds.
    // To make the delay in given number of seconds, it converts seconds to milliseconds and calls the 'wait' function:
    // TODO: Write code here

    console.h3('Homework Task 18.03. Points: 3');
    // Complete a function below.
    // It pretends to read a file from the disk (not reading it, actually). 
    // But, if filename is 'error.txt', it always returns a rejected Promise, resolving in error.
    function readFile(fileName) {
        return new Promise((resolve, reject) => {
        // TODO: Complete code here
        })
    }

    // Call this function:
    readFile('errortxt')
        .then(result => console.log(result))
        .catch(err => console.log('err:', e));

})();