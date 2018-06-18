(function(){
var course = {};
Object.defineProperty(course, 'startDate',{
    value: new Date('May 7, 2018 00:00:00')
});
exports.getStartDate = function (){return course.startDate};
})();