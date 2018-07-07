<<<<<<< HEAD
//src/app/course/index.js
var getter = require ('./course/index');
console.log('App file');
console.log('Start date: ', getter.getStartDate());
=======
// src/app/index.js
require('./util/console');
const config = require('./config/config');
const course = require('./course/course');

console.h1('App started');
console.h1(course.getStartDate());

const c = config.getInstance();

c.loadConfig('app.config.json', (err, data) => {
});

const l1 = course.createLesson('Lesson 1', 'Theoretical');
const l2 = course.createLesson('Lesson 2', 'Practical');

l1.execute();
l2.execute();
>>>>>>> e1f9e8c641d27855fe0af22d1fb986648b1bb538