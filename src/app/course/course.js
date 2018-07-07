// src/app/course/index.js

(function () {

    const config = require('../config/config');
    const c = config.getInstance();

    c.loadConfig('lessons.config.json', parseConfig)

    startDate = new Date();

    function parseConfig(err, data) {
        if (err) {
            console.log(err);
        }
        console.log('Lessons Config Loaded:', data);
    }

    // LessonFactory
    // Parent Constructor
    function LessonFactory() {}

    // Parent Method
    LessonFactory.prototype.execute = function () {
        console.log('Execute:', this.lessonName);
        if (this.tasks) {
            for (let i = 0; i < this.tasks.length; i++) {
                console.log('Task:', this.tasks[i]);
            }
        }
    };
    // Static Factory Method - factory
    LessonFactory.factory = function (lessonName, type) {
        var constr = type,
            newLesson;
        // Error if constructor doesn't exist
        if (typeof LessonFactory[constr] !== "function") {
            throw {
                name: "Error",
                message: constr + " doesn't exist"
            };
        }
        // Contructor is here, let's inherit 'execute' from parent constructor, but only once
        if (typeof LessonFactory[constr].prototype.execute !== "function") {
            LessonFactory[constr].prototype = new LessonFactory();
        }
        // Create new instance
        newLesson = new LessonFactory[constr]();
        newLesson.lessonName = lessonName;
        return newLesson;
    };
    // Concrete lesson constructions
    LessonFactory.Theoretical = function () {
        this.tasks = null;
    };
    LessonFactory.Practical = function () {
        this.tasks = [1, 2, 3];
    };

    // Public Module API
    exports.getStartDate = () => startDate;
    exports.createLesson = LessonFactory.factory;

})();