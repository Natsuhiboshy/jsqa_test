/**
 * Le**on 14. Regular expressions.
 */

'use strict';

(function () {
    require('../../util/console');    

    console.h1('Le**on 14. Regular expressions');

    function testRegexpOnAString(str, regex) {
        console.log(`\nString: "${str}" RegExp: ${regex}`);
        console.log('Search result:', str.match(regex));
    }

    testRegexpOnAString('Lesson 14', /14$/);
    testRegexpOnAString('eater', /t$/);
    testRegexpOnAString('eat', /t$/);
    
    testRegexpOnAString(`RegExr v3 was
    Re-created`, /^R/gm);

    testRegexpOnAString('et', /a+/);
    testRegexpOnAString('et', /a*/);
    
    testRegexpOnAString('angel', /e?le?/);
    testRegexpOnAString('elaborate', /e?le?/);
    testRegexpOnAString('lion', /e?le?/);
    testRegexpOnAString('elections', /e?le?/);
    
    testRegexpOnAString('elections.', /.+\./);
    
    
    const replaceResult = 'foo bar foo bar'.replace(/(foo) (bar) \1 \2/, 'Replaced: $2 $1');

    console.log('Replace result:', replaceResult);

    testRegexpOnAString('elelelections.', /le{1,2}/);
    testRegexpOnAString('elelelections.', /(?:le){1,2}/);
    
    // Lookahead:
    testRegexpOnAString('Elections are zoom.', /are(?=\ssoon|\szoom)/);

    // Negated Lookahead:
    testRegexpOnAString('Elections are soon.', /are(?!\ssoon)/);
    
    testRegexpOnAString('Electins soon are soon.', /(Elections|are)(?=\ssoon)/);
    
    testRegexpOnAString('Elections soon are soon.', /Elections|are/);
    
    testRegexpOnAString('Elections are soon, very sooooooon.', /o{1,2}/g);


    //
    // Homework
    //
    console.h2('Lesson 14 Homework');
    console.h3('Homework Task 14.01');
    // Points: 1
    // Given is a string:
    let homeworkOneTaskOne = 'Can JavaScript file contain non-executable code?'
    // Write a regular expression to match the 'JavaScript' word in the given string.
    // Log the result to the contsole.
    // TIP: you don't need any special RegExp characters to complete this task.
    // TODO: write code here

    console.h3('Homework Task 14.02');
    // Points: 2
    // Given is the same string, as in Task 1.
    // Write a regular expression to match the 'con', and 'cod' in the given string.
    // Log the result to the contsole.
    // TIP: you do need a special RegExp character and 'g' flag to complete this task.
    // TODO: write code here

    console.h3('Homework Task 14.03');
    // Points: 3
    // Given is the same string, as in Task 1.
    // Write a regular expression to match the 'Can', 'con', and 'cod' in the given string.
    // Log the result to the contsole.
    // TIP: you may need few special characters, 'g' and 'i' flags.
    // TODO: write code here

    console.h3('Homework Task 14.04');
    // Points: 2
    // Given is a multi-line string:
    let homeworkTwoTaskOneResult = `Task 02.01: TODO: Review the contents of this file and make sure you understand it.
    I've reviewed the l-02.js file and I understand it`;
    // Using String.prototype.match method, find 
    // the index of the substring 'I've reviewed the l-02.js file and I understand it'
    // and log the found index to the console.
    // TIP: you don't need neither special characters nor flags to complete this task
    // TODO: write code here

}());