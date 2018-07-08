/**
 * Le**on 15. Regular expressions. Part 2
 */

'use strict';

(function () {
    require('../../util/console');    

    console.h1('Le**on 15. Regular expressions');

    let regex = /s{2}/g;
    let regexLocal = /s{2}/;
    let str = 'Lesson 14 is finished, Lesson 15 is not. Assuming you are still working on it.';

    // Test:
    console.h3('RegExp.prototype.test() [GLOBAL]');

    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);
    console.log(regex.test(str), regex.lastIndex);

    console.h3('RegExp.prototype.test() [LOCAL]');

    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);
    console.log(regexLocal.test(str), regexLocal.lastIndex);

    // Execute:
    console.h3('RegExp.prototype.exec() [GLOBAL]');

    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);
    console.log(regex.exec(str), regex.lastIndex);

    console.h3('RegExp.prototype.exec() [LOCAL]');

    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);
    console.log(regexLocal.exec(str), regexLocal.lastIndex);

    // Match:
    console.h3('String.prototype.match() [GLOBAL]');

    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    console.log(str.match(regex), regex.lastIndex);
    
    console.h3('String.prototype.match() [LOCAL]');
    
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);
    console.log(str.match(regexLocal), regexLocal.lastIndex);

    // Search
    console.h3('String.prototype.search() [GLOBAL]');
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
    console.log(str.search(regex), regex.lastIndex);
        
    console.h3('String.prototype.search() [LOCAL]');
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);
    console.log(str.search(regexLocal), regexLocal.lastIndex);

    // 
    // Homework
    // 

    console.h2('Lesson 15 Homework');

    console.h3('Homework Task 15.01. Points: 1');
    // Task: review Slide # 23 from here...
    // https://docs.google.com/presentation/d/1qryoG2jeH5XMkkpx-imWl1EtpUnDmRh8dVnf7lfhJNo/edit?usp=sharing
    // ...and complete this phrase, replacing three dots [...] with needed word:
    console.log('Parentheses around any part of the regular expression pattern causes that part of the matched substring to be ...');


    console.h3('Homework Task 15.02. Points: 1');
    // Let's practice RegExp.prototype.test() method
    // Given is the phrase:
    let phrase = 'Once remembered, the substring can be recalled for other use.';
    // And regular expression:
    let reg = /.d/;
    // Using RegExp.prototype.test method, check whether the given regexp can be found in the given string.
    // Output the result to the console.
    // TODO: Do your work here:


    console.h3('Homework Task 15.03. Points: 2');
    // Given is the same phrase as in previous task.
    // But regular expression now uses global flag:
    let regg = /.d/g;
    // Using RegExp.prototype.test method, check how many times the given regexp can be found in the given string.
    // Output the result to the console.
    // TODO: Do your work here:


    console.h3('Homework Task 15.04. Points: 3');
    // Let's practice RegExp.prototype.exec() method
    // Given is the same phrase and regular expressions 'regg', which uses global flag.
    // Using RegExp.prototype.exec method;
    
    // Using the RegExp.prototype.exec() method, list the indexes of all inclusions of this regexp in the string.
    // Output the result to the console.
    // TODO: Do your work here:

}());