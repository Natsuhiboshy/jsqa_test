<<<<<<< HEAD
(function(){
var course = {};
Object.defineProperty(course, 'startDate',{
    value: new Date('May 7, 2018 00:00:00')
});
exports.getStartDate = function (){return course.startDate};
})();
=======
// src/app/course/index.js

(function () {
    startDate = new Date();
    exports.getStartDate = function () {
        return startDate;
    }
})();

>>>>>>> e1f5b71172fc1d481a1a8451dca5d04c3de498c9
